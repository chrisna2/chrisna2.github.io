---
title: "[springboot] Spring-Boot(3) : ExceptionHandler정리"
date: 2019-09-23 08:26:28 -0400
categories: springboot
---

Spring-Boot를 정리하는데 AOP를 정리하고 Exception을 정리한 이유는 바로 ExceptionHandler를 설명하기 위해서였다.
흔히들 예외 처리를 할 경우 try ~ catch 문을 사용하게 되는데 ExceptionHandler는 try ~ catch 부분에 catch가 하는
역활들을 한다. 둘 다 에러가 발생할 경우 에러에 대한 후처리를 하는 곳이지만 ExceptionHandlers는 컨트롤러에서 발생하는
모든 에러들을 캐치하여 후처리를 해준다. MVC패턴에 경우 모든 로직의 처리가 Controller에서 발생한다는 점을 생각하면 
사실상 프로젝트 전반에 걸쳐 발생하는 에러에 대행 후처리를 한다고 생각해도 무방하다.

```java

@ControllerAdvice
public class ServiceFailHandler {

	private HashMap<String, Object> msgMap;
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	@ExceptionHandler(Exception.class)
	public HashMap<String, Object> handle(HttpServletRequest request, Exception ex) throws Throwable {
 	
	msgMap = new HashMap<String, Object>();
    
    	//해당 프로젝트 패키지 안에서 발생하는 에러만 추출해서 메세지 출력
		String stackTrace = "";
		for(int i = 0; i < ex.getStackTrace().length; i++) {
			if(ex.getStackTrace()[i].toString().matches(".*com.mymy.project.*")) {
				stackTrace += ex.getStackTrace()[i].toString()+"\n";
			}
		}
		
		//사용자 정의 에러 메세지 
		if(ex instanceof CustomException) {
			CustomException cusExp = (CustomException) ex;
			
			// 추가 에러 메세지 추가 할 경우
			if(null != cusExp.getErrorAddMsg() && cusExp.getErrorAddMsg().length > 0) {
				try {
					cusExp.setErrorMsg(String.format(cusExp.getErrorMsg(), cusExp.getErrorAddMsg()));
				} 
				catch (Exception e) {
					List<String> newAddMsg = new ArrayList<String>();
					for(String addmsg:cusExp.getErrorAddMsg()) {
						newAddMsg.add(addmsg);
					}
					if(cusExp.getErrorMsg().lastIndexOf("%s")+1 > cusExp.getErrorAddMsg().length) {
						for(int i = cusExp.getErrorAddMsg().length;i<cusExp.getErrorMsg().lastIndexOf("%s")+1;i++) {
							newAddMsg.add("");
						}
					}
					cusExp.setErrorMsg(String.format(cusExp.getErrorMsg(), newAddMsg.toArray()));
				}
			}
			
			msgMap.put("errorMsg", cusExp.getErrorMsg());
			msgMap.put("errorCode", cusExp.getErrorCode());
		}
		//MyBatis
		else if(ex instanceof MyBatisSystemException) {
			//TODO:해당 에러 타입에 대한 CustomException 에러 메세지 출력 설정
		} 
		//SQL
		else if(ex instanceof SQLException) {
			//TODO:해당 에러 타입에 대한 CustomException 에러 메세지 출력 설정    
		} 
		else {
			//TODO:해당 에러 타입에 대한 CustomException 에러 메세지 출력 설정    
		}
		
		msgMap.put("exception", ex.getMessage());
		msgMap.put("stackTrace", stackTrace);
		
		logger.info("@ComServiceFailHandler =>"+msgMap.toString());
		
		return msgMap;
    
  }
}
```

위에 소스는 에러 예외가 발생하는 해당 에러에 대한 메세지를 컨트롤러의 MAP에 담아 촐력하는 메서드이다,
HttpStatus.BAD_REQUEST를 대상으로 서버상에 에러가 발생할때 후처리를 하게 된다. @ControllerAdvice를 보면 
이 또한 AOP 처럼 포인트 대상의 메서드가 컨트롤러인 것을 확일 할 수 있다. 

파라미터에서 Exception 을 받는데 모든 예외 처리의 클래스가 여기에 담겨진다. 
특수하게 잦은 에러의 경우 instanceof를 사용하여 해당 에러의 형태를 특정하여 후처리 해주어야 한다. 

간단한 설명을 위해 위에 코드에는 담기지 않았지만
메세지코드를 DB에 담을 경우 여기에 Mapper를 구성하여 해당하는 메세지를 출력해 줄 수 있다.
보통 현업에서는 메세지코드로 메세지가 특정됨으로 메세지 코드를 통해 DB에 해당 메시지를 조회한다. 
```java
throw new CustomException("E01010");
```
그럴 경우 위와 같이 현업에서 특정한 메세지 코드로 예외처리를 특정해 주어야 할 것이다.

