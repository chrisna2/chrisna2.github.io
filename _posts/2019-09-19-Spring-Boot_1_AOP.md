---
title: "[springboot] Spring-Boot(1) : AOP정리"
date: 2019-09-19 08:26:28 -0400
categories: springboot
---

### 스프링부트

스프링 프레임워크를 처음 배운지 어언 3년이 지났다. 시간은 흘러 스프링을 이해 하기 위해 수십개의 XML을 설정 했던 지난날과 달리 이제는 XML이 없는 깔끔하고 가벼운 스프링 부트가 대세가 되었다. 앞으로의 개발은 스프링 부트가 대세가 될 것으로 보인다.

### AOP

첫번째 주제를 AOP로 설정한 이유는 AOP가 스프링의 핵심이자 지금의 스프링을 있게한 기술이기 때문에 그렇다. @Autowired 기술의 기반이고 @Intercept의 기술의 기반인 AOP를 설명하지 않으면 안될 것 같기 때문이다. 실제로도 많이 쓰이기도 하고.

### Spring Boot안에서 AOP

* * *
일단 pom.xml에 의존성 추가한다.
* * *
```html
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

처음에는 이 의존성이 같이 spring-boot-starter-web 이런데 같이 들어간건가 생각했다.
하지만 기본 웹 설정에서는 들어가지 않고 AOP만 따로 갈거면 위에 의존성을 추가해야 했다.
다만 위에 의존성이 없더라도 인터셉터는 정상 동작한다.

* * *
Application 클래스에 어노테이션 추가
* * *

```java
@EnableAspectJAutoProxy
@SpringBootApplication
public class Application extends SpringBootServletInitializer
```

@EnableAspectJAutoProxy 어노테이션은 AOP 클래스를 찾는 클래스이다. 
위에 설정을 하지 않으면 해당 AOP클래스를 인식하지 못하닌 반드시 먼저 추가할 것

* * *
AOP 클래스 생성
* * *

```java
//위 1번의 의존성을 추가하지 않으면 @Aspect 어노테이션을 추가할 수 없다.
@Aspect
@Component
//일단 임시로 최저 순위 이전 단계에서 실행
@Order(Ordered.LOWEST_PRECEDENCE-1)
public class SimpleAspect {
```

AOP 메소드 설정
* * *

```java
//조인트 포인트 : service단에서 입력 및 수정에 한하여 시작. insert 또는 update로 시작하는 모든 메소드
@Around("execution(* com.tyn.skmagic.persistence.ComDao.insert*(..))||"
       +"execution(* com.tyn.skmagic.persistence.ComDao.update*(..))")
public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
	//@Before시 변경된 값을 서비스에 입력해줄 방법이 없어서 ProceedingJoinPoint가 사용가능한 @Around로 사용
	logger.info("@Around:" + joinPoint.getSignature().getDeclaringTypeName() + " / " + joinPoint.getSignature().getName());
		
    	//조인트 포인트에서 해당  Map argument 채집
	Object obj[] = joinPoint.getArgs();
	Map<String,Object> map = (HashMap<String,Object>)obj[1];
		
	//현재 시간 일자
	Date date = new Date();
	DateFormat fmtTimstamp = new SimpleDateFormat("yyyy-MM-dd");
	String nowDate = fmtTimstamp.format(date);
	
	//메소드 앞글자에 따라서 기능이 달림
	if("insert".equals(joinPoint.getSignature().getName().substring(0, 6))){
		//insert시 공통 입력값 설정
		map.put("emp_join_date", nowDate);
		map.put("emp_out_date", "9999-12-31");
		map.put("emp_del_yn", "n");
	}
	else {
		//update시 공통 입력값 설정
		map.put("emp_del_yn", "n");
	}
		
	logger.info("@Around:" + map.toString());
		
	obj[1] = map;
		
	//해당 설정 값 서비스로 전송
    	//포인트 컷 대상의 메서드가 실행이 됨. 메서드이 실행 결과는 Object이니 형변환은 필수
	HashMap<String,Object> result = (HashMap<String,Object>)joinPoint.proceed(obj);	
    
    	//포인트 컷 대상의 메서드가 실행한 이후 추가 설정이 여기서 붙음
    	result.put("msg","insert & update complete)
    
    	//AOP와 포인트컷 메서드 로직 종료
    	return result
}
```

위에 AOP는 간단한 입력 및 수정시 공통입력 처리 AOP이다

joinPoint기준으로 크게 3가지로 나뉜다.
+ @Around 
+ @Before
+ @After 

내가 주로 쓰는 방식은 @Around를 사용한다. 파라미터로 ProceedingJoinPoint 를 받을 수 있고 포인트 컷 대상 메서드 실행 전과 실행 후의 모든 것을
앞뒤로 joinPoint.proceed(obj) 앞뒤로 처리할 수 있기 때문이다. 

핵심은 포인트컷 문법이다. AOP를 적극 활용하기 위해서는 반드시 사전 작업으로 들어가는 것이 있다. 메서드 명명 규칙이다. 
어두에 통일을 줄지 어미에 통일을 줄지는 개발 작업 전에 설정으로 정해 놔야 한다. 위에 코드는 어두에 약속을 주어 메서드를 구분했다.

다시금 프로그램의 절반이상은 작명이라는 것을 다시 느낀다.
