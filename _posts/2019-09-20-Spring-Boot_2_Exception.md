---
title: "Spring-Boot(2) : Exception 정리"
date: 2019-09-20 08:26:28 -0400
categories: springboot
---

기본적으로 Exception은 프로그램 자체 에러를 표현하는 경우도 존재하지만,
사실 Exception을 따로 커스텀하며 사용하는 이유는 업무로직에 반하는 경우
브레이크를 걸어 메시지를 던지는 이유가 크다. 

개발 환경에 따라 다르지만 대부분의 프로젝트에서는 메시지 테이블이 존재하고
메시지 테이블을 기준으로 필요한 메세지를 던져 준다.

오늘은 아주 간단하게 프로젝트에 Exception을 구성하는 방법에 대해
정리해보고자 한다. 

* * *
먼저 Exception 클래스를 정의 해본다.
* * *
```java
public class CustomException extends RuntimeException{
	
	private static final long serialVersionUID = -5089032787769895226L;
	
	/**
	 * errorCode : 메세지 출력 형태
	 * - info
	 * - warn
	 * - error
	 */
	private String errorCode;
	/**
	 * errorMsg : 팝업창에 출력될 에러/인포 메세지
	 * ※ 추가 메세지는 '%s'로 처리
	 */
	private String errorMsg;
	
	/**
	 * errorMsg : 출력
	 */
	private String[] errorAddMsg;
	
	public CustomException(String errorCode) {
		this.errorCode = errorCode;
	}
	
	public CustomException(String errorCode, Throwable cause) {
		super(cause);
		this.errorCode = errorCode;
	}
	
	public CustomException(String errorCode, String[] addMsg, Throwable cause) {
		super(cause);
		this.errorCode = errorCode;
		this.errorAddMsg = addMsg;
	}
	
	public CustomException(String errorCode, String errorMsg, Throwable cause) {
		super(cause);
		this.errorCode = errorCode;
		this.errorMsg = errorMsg;
	}
	
	public CustomException(String errorCode,String errorMsg) {
		this.errorCode = errorCode;
		this.errorMsg = errorMsg;
	}
	
	public CustomException(String errorCode, String errorMsg, String[] addMsg) {
		this.errorCode = errorCode;
		this.errorMsg = errorMsg;
		this.errorAddMsg = addMsg;
	}
	
	public CustomException(String errorCode, String[] addMsg) {
		this.errorCode = errorCode;
		this.errorAddMsg = addMsg;
	}
	
	public String getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public String[] getErrorAddMsg() {
		return errorAddMsg;
	}

	public void setErrorAddMsg(String[] addMsg) {
		this.errorAddMsg = addMsg;
	}
	
}
```
보통 Exception 클래스의 ErrorMsg 혹은 메세지의 경우 DB에 정의 되어 코드를 호출하면 해당 메세지가 출력된다.
그러나 현재 이 Exception 클래스는 간단하게 구성하는 것이므로 개발자가 직접 메세지를 출력하는 형태로 구성해 보았다.
이미 runtimeException을 상속 받았기 때문에 상위 클래스의 항목도 포함하고 있다는 점을 주의 하며 일단 간단하게 3개의 
항목을 추가하여 구성했다.

* * *
Exception 사용법
* * *
위와 같이 Exception을 구성했다면 사용법은 간단하다.

```java
throw new CustomException("info", "알림창 메세지 출력입니다.");
throw new CustomException("error", "입력값이 숫자가 아닙니다.");
```
이런식으로 로직 상에 브레이크가 필요한 부분에 에러를 던져 주면 된다. 
필요한 부분에 에러를 던지면 runtimeException으로 인식하여 해당 트랜잭션이 종료된다.
서비스나 필요 트랜잭션 처리를 했다면 이전에 처리했던 부분도 같이 롤백이 되니 
이를 신경 써야 한다.
