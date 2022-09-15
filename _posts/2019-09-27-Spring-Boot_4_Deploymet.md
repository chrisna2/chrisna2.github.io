---
title: "[springboot] Spring-Boot(4) : 배포 기초 정리, (스프링부트, appache, tomcat, maven)"
date: 2019-09-27 08:26:28 +0900
categories: springboot
---

# was? tomcat? apache? 으아아아아!
회사에 입사하면서 수 많은 java와 스크립트를 써내려 갔지만 아직도 개발자임에도 
배포 문제는 언제나 번거로운 문제였다. 경험도 많지 않아서 겨우 카페24에서
프로젝트롤 올린게 전부였다. 그기 지금의 http://skgusrl2.cafe24.com/ 하랑 프로젝트였다.

그때는 스프링에 친철하게 카페24의 설명에 따른 것이었지만
이번의 상대는 리눅스 서버에 스프링부트 프로젝트를 직접 war를 배포하는 일 이었다.
그 둘의 차이가 크지는 않지만 카페24는 자체적안 툴로 원격 접속하여 호스팅을 했다면
이번에는 진짜 회사에서 구성한 생짜 리눅스에 war를 배포를 해야 한다는 점이었다.

리눅스는 어깨너머로 겨우 파일 찾아가는 명령어 밖에 할 줄모르지만 
이거 못하면 개발자 아니라는 듯 바라보는 선임의 경멸어린 눈초리에 덜덩 거리며
기를 쓰고 방법을 찾아 봤다. 

# 스프링 부트 war 빌드 부터 안되 ㅠㅠ
일단 지금까지 구성한 프로젝트를 war로 구성하는 것에서 부터 문제가 발생했다.
그냥 단순하게 export 처리해서 war파일만 뽑아내면 되겠지 생각했었다. 

아니었다. ㅜㅜ

스프링 부트는 기본적으로 jar파일로 빌드를 한다. 자체적으로 톰캣이 내장되어있기 때문에
jar로 배포되도 알아서 찰떡 같이 배포를 시켜준다고 한다..만 .. 나는 jsp를 사용하는 개발자였기에 war파일을 만들어야 했다.

일단 가장 먼전 pom.xml을 손봐야 한다. 처음부터 무심결에 프로젝트를 그냥 생성했다면 

```xml
<packaging>jar</packaging>
```
로 되어 있을 것이다. ㅜㅜ

```xml
<packaging>war</packaging>
```

바꿔 준다. 내장 톰캣을 안쓰면

```xml
	<dependency>
     		<groupId>org.springframework.boot</groupId>
      		<artifactId>spring-boot-starter-tomcat</artifactId>
    		<scope>provided</scope>
	  </dependency>		
```
<scope>provided</scope> 설정 추가한다. 
그리고 Applicatin.java를 설정한다.

```java
@EnableAspectJAutoProxy
@SpringBootApplication
public class Application extends SpringBootServletInitializer{
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(Application.class);
	}
	
	public static void main(String[] args) throws Exception{
		SpringApplication.run(Application.class, args);
	}

}
```
SpringBootServletInitializer상속 받아야 된다.

그리고 프로젝트에서 오른쪽 마우스 > Run As > Maven Install.. 
그러면 war 파일대신 build fail이 뜬다 ㅇㅇ??

당황하지 않고
project -> properties -> Maven -> pom.xml 삭제..
내장 메이븐을 사용하면 가끔씩 이런 일이 발생한다.

비로소 war 파일 생성 돠었다. 이때까지 오전이 다갔다.

# 이제 리눅스에 war파일만 올리면... 어?

비로소 war 파일 생성 돠었다. 이제 그걸 리눅스에 설치됱 톰캣서버 경로에 올리면 된다.
보통 톰캣이 깔린 서버의 경로는 
/usr/local/apache-tomcat-8.5.43 정도 되는데
거기를 기준으로 잡으면된다.
하위 폴더를 보면 /usr/local/apache-tomcat-8.5.43/webapp이 있는데 거기에 war를 투척하면 된다.
그리고 /usr/local/apache-tomcat-8.5.43/bin에가서 was를 내렸다 올려준다.

```sh
./shutdown.sh
./startup.sh
```
그러면 짜잔 war파일이 올라간것이 경로에 압축해제된 것을 볼수 있다.

그러면 이제 서버 아이피로 확인 되겠지 싱글 벙글 한던 찰나. 

엫... 404...?

문제는 그렇게 배포가 된다고 서버에 등록 된게 아니라는 것이다.
/usr/local/apache-tomcat-8.5.43/conf/server.xml에서 해당 서버 설정을 해줘야 한다.
기존의 sts에서는 이클립스에서 add & remove 해주었던게 리눅스에서는 손수 코딩으로 처리해 주어야 한다.

```xml
<Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">

    <Context docBase="myservice-0.0.1-SNAPSHOT" path="/" reloadable="false"/> 
        
    <중략...>

</Host>
```
myservice-0.0.1-SNAPSHOT.war 파일을 wepapp에 올리게 되면 자동으로 
압축이 해제되어 myservice-0.0.1-SNAPSHOT 폴더가 생성되는데 was에서 그 경로를 인식할수 있게
설정 해야 한다.

appBase="webapps" 는 아까 내가 war파일을 올린 장소고
내가 해줘야 하는것은

```xml
<Context docBase="myservice-0.0.1-SNAPSHOT" path="/" reloadable="false"/> 
```

이것을 추가하는 것이다. war파일이 압축 풀린 폴더 경로를 등록하고 path는 인덱스 화면 baseurl 주소다.

그 등록을 마치고 was를 올렸다 내리면..

오~ was에서 사이트가 인식이된다.

지금의 방식은 수동으로 올렸다 내리는 방식임으로 
지금까지의 개고생을 하기 싫으면

젠킨스 svn (git) 톰켓이 삼위일체 되어 빌드 자동화 구성을 만들어야 한다.
대부분의 프로젝트에서는 그렇게 자동 빌드가 되도록 설정이 되어있는데.
이번일은 매우 간단한 프로젝트라서 하나부터 열까지 수동으로 찾아가며 배포해야 했다. 

뒤돌아서면 까먹을수 있으니 나중에 한번 더 해봐야 겠다.










