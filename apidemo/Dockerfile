FROM openjdk:8

COPY ./apidemo-0.3.jar /usr/src/myapp/apidemo-0.3.jar

WORKDIR /usr/src/myapp

CMD ["java", "-jar", "./apidemo-0.3.jar", "--server.port=8080"]
