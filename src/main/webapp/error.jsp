<%--
  Created by IntelliJ IDEA.
  User: anton
  Date: 06.11.2023
  Time: 18:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Not Found</title>
    <style>
        <%@include file='style.css' %>
    </style>
</head>
<body>
<div id="centered-container">
    <h1>Не найдено</h1>
    <form action="${pageContext.request.contextPath}/controller" method="post" class="res">
        <p>
            <button id="return-button" name="return">Возврат на главную страницу</button>
        </p>
    </form>
</div>
</body>
</html>
