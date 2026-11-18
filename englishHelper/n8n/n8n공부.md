# n8n 공부 정리: OPIc 스크립트 AI 평가 연동

틀 연습(`opic2`) 화면에서 말하기 스크립트를 n8n 웹훅으로 보내고, OpenAI가 OPIc 기준으로 평가한 결과를 받아 화면에 보여 주기까지 만든 과정을 정리한 문서입니다.

---

## 1. 전체 구조

```
[GitHub Pages 앱 (opic2)]
   │  POST JSON { question, kind, transcript, seconds }
   ▼
[n8n Webhook 노드]  ── CORS 허용: https://chrisna2.github.io
   ▼
[Code: 입력 검증 + 프롬프트 구성]
   ▼
[IF: ok 인가?] ── 아니면 ──────────────────────────┐
   ▼ 맞으면                                       │
[HTTP Request: OpenAI Chat Completions]           │
   ▼                                              │
[Code: 응답 파싱 + 기록 형식 보정]                 │
   ▼                                              │
[Respond to Webhook: JSON 응답] ◀─────────────────┘
   ▼
[앱: 결과 표시 + localStorage 날짜별 저장]
```

- 브라우저에는 **웹훅 주소만** 둡니다(`opic2/config.js`).
- OpenAI 키는 **n8n 자격증명**에만 둡니다. 프론트 코드에 넣지 않습니다.

---

## 2. n8n 핵심 개념 정리

| 개념 | 설명 | 이번 프로젝트에서 |
|---|---|---|
| **Webhook 노드** | 외부에서 HTTP 요청을 받는 시작점 | POST, path `opic-eval`, Respond 모드 "Respond to Webhook node" |
| **Test URL vs Production URL** | 테스트: `/webhook-test/...`, 운영: `/webhook/...` | 테스트 주소는 Execute를 누른 뒤 **한 번만** 응답함. 운영은 Active면 계속 응답 |
| **Execute workflow** | 편집 화면에서 테스트 웹훅을 대기 상태로 만드는 버튼 | 운영 주소로 바꾸면 불필요 |
| **Active 스위치** | 워크플로우를 운영 상태로 켜는 스위치 | 켜야 운영 주소가 동작함 |
| **Allowed Origins (CORS)** | 어느 웹 페이지가 이 웹훅을 호출해도 되는지 지정 | `https://chrisna2.github.io` (경로 없이 origin만) |
| **Code 노드** | JavaScript로 데이터를 가공 | 입력 검증, 프롬프트 구성, 응답 파싱 |
| **IF 노드** | 조건에 따라 분기 | `ok`가 true면 OpenAI 호출, 아니면 바로 응답 |
| **HTTP Request 노드** | 임의의 API 호출 | OpenAI Chat Completions 호출 |
| **Respond to Webhook** | 웹훅 요청자에게 응답을 돌려줌 | 결과 또는 오류 JSON 반환 |
| **Credentials (자격증명)** | 키를 워크플로우 밖에 안전하게 보관 | `OpenAI account`(openAiApi) |

### 웹훅 데이터 위치
- Webhook 노드 다음 노드에서 요청 본문은 `$input.first().json.body`에 있습니다.
- 헤더나 쿼리는 `json.headers`, `json.query`에 있습니다.

---

## 3. 과정에서 겪은 문제와 원인

### (1) "매번 Execute를 눌러야 동작함"
- **원인**: 앱이 `webhook-test` 주소를 쓰고 있었음.
- **해결**: 워크플로우를 Active로 켜고, 주소를 `webhook`(운영)으로 변경.

### (2) CORS 오류: `No 'Access-Control-Allow-Origin' header`
- **원인 A**: Allowed Origins가 자리표시자(`https://YOUR-APP-ORIGIN`)였음.
- **원인 B**: 테스트 웹훅이 대기 상태가 아니어서 n8n이 **404**를 반환. 404에는 CORS 헤더가 없어서 브라우저가 CORS 오류로 표시함.
- **확인 방법**: preflight(OPTIONS) 요청을 직접 보내서 상태 코드와 헤더를 봄.
  ```bash
  curl -i -X OPTIONS "https://<인스턴스>/webhook/opic-eval" \
    -H "Origin: https://chrisna2.github.io" \
    -H "Access-Control-Request-Method: POST" \
    -H "Access-Control-Request-Headers: content-type"
  ```
  - 정상이면 `204` + `Access-Control-Allow-Origin: https://chrisna2.github.io`.

### (3) 파일을 고쳐도 n8n에는 반영되지 않음
- 저장소의 JSON 파일은 **사본**입니다. n8n에 이미 Import된 워크플로우는 자동으로 바뀌지 않습니다.
- 수정은 n8n 화면에서 직접 하거나, 파일을 다시 Import해야 합니다(다시 Import하면 워크플로우가 하나 더 생김).

### (4) 자격증명이 "비어 있음"으로 보임
- Import된 파일에는 자격증명 ID가 자리표시자로 들어 있습니다. Import 후 노드에서 **자격증명을 다시 선택**해야 합니다.

### (5) Windows에서 curl이 인증서 검사로 실패
- `CRYPT_E_NO_REVOCATION_CHECK` 오류는 schannel의 취소 목록(CRL) 확인 실패입니다.
- 테스트용으로 `--ssl-no-revoke` 옵션을 쓰면 우회됩니다. 브라우저에서는 보통 문제가 없습니다.

---

## 4. API 키와 구독은 별개

- **ChatGPT 구독(Plus 등)** ≠ **OpenAI API**. n8n은 API 키로만 연결됩니다.
- API는 `platform.openai.com`에서 키를 발급받고, 결제 수단과 크레딧이 있어야 호출이 됩니다.
- 같은 이유로 Claude 구독도 API 호출에는 별도 설정이 필요합니다.
- 비용 사고를 막으려면 OpenAI 대시보드에서 **사용 한도(Usage limit)** 를 걸어 두세요.

---

## 5. 모델 선택

- 현재 모델: `gpt-4.1-mini` (Code 노드 `Validate and Build Prompt`의 `MODEL` 값).
- 모델을 바꾸려면 그 한 줄만 고치면 됩니다.
- 무료로 쓰고 싶다면 Gemini 무료 티어(n8n Google Gemini 노드), Groq 무료 티어, Ollama(로컬 모델)를 고려할 수 있습니다. 무료 티어의 한도와 약관은 자주 바뀌니 확인이 필요합니다.

---

## 6. 빠른 점검 체크리스트

- [ ] 워크플로우가 **Active** 상태인가?
- [ ] `opic2/config.js`의 주소가 **`/webhook/opic-eval`**(운영)인가?
- [ ] Webhook 노드의 **Allowed Origins**가 `https://chrisna2.github.io`인가? (n8n 화면에서 저장했는가?)
- [ ] `OpenAI Chat` 노드에 **자격증명이 연결**되어 있는가?
- [ ] OpenAI 계정에 **크레딧**과 **결제 수단**이 있는가?
- [ ] preflight 요청이 `204`와 `Access-Control-Allow-Origin`을 돌려주는가?

---

## 7. 테스트 방법

1. **빈 입력 테스트 (OpenAI 비용 없음)**
   ```bash
   curl -X POST "https://<인스턴스>/webhook/opic-eval" \
     -H "Content-Type: application/json" \
     -d '{"transcript":"","question":"test","kind":"survey"}'
   ```
   → `{"ok":false,"error":"스크립트가 비어 있어요."}`가 나오면 웹훅과 검증 로직은 정상입니다.

2. **실제 평가 테스트 (OpenAI 호출, 비용 발생)**
   - 8단어 이상 영어 스크립트로 앱의 **AI 평가** 버튼을 누릅니다.
   - 응답은 `{"result":{"grade","summary","good","problems","actions"}}` 형태입니다.

3. **실행 기록 확인**
   - n8n의 **Executions** 탭에서 각 노드 입출력을 볼 수 있습니다. 오류 원인은 여기서 찾는 것이 가장 빠릅니다.

---

## 8. 앞으로 할 일

- [ ] 실제 평가 결과가 화면에 정상으로 나오는지 확인
- [ ] 프롬프트 튜닝: OPIc 등급 기준을 더 구체적으로 넣기
- [ ] 기록 삭제 기능 추가 (현재는 최대 30개 자동 보관)
- [ ] 필요하면 무료 모델(Gemini/Ollama)로 전환 비교
- [ ] 워크플로우 JSON을 최신 상태로 저장소에 맞춰 두기 (n8n 화면 수정 후 Export)
