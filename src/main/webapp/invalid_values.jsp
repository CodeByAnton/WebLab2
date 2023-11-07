<%--
  Created by IntelliJ IDEA.
  User: anton
  Date: 07.11.2023
  Time: 15:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Invalid Values</title>
    <style>
        <%@include file='style.css' %>
    </style>
</head>
<body>
<div id="centered-container">
<h1>
    В качестве аргументов передавать можно только числа, при том X:(-3;3);
    Y целые и принадлежат [-3;5]
    </h1>
<form action="${pageContext.request.contextPath}/controller" method="post" class="res">
    <p>
        <button id="return-button" name="return">Возврат на главную страницу</button>
    </p>
</form>
</div>
</body>
</html>
