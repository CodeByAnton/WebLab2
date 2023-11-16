<%--
  Created by IntelliJ IDEA.
  User: anton
  Date: 05.11.2023
  Time: 23:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Web-Lab2</title>
    <style>
        <%@include file='style.css' %>
    </style>

</head>
<body>
    <div class="res-container">


    <form action="${pageContext.request.contextPath}/controller" method="post" class="res">
        <p>
            <button id="return-button" name="return">Возврат на главную страницу</button>
        </p>
    </form>
    </div>
    <table id="result-table">
        <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Результат</th>
            <th>Время</th>
            <th>Время выполнения скрипта</th>
        </tr>
        <c:forEach items="${data}" var="row">
            <tr>
                <td><c:out value="${row.getX()}" /></td>
                <td><c:out value="${row.getY()}" /></td>
                <td><c:out value="${row.getR()}" /></td>
                <td><c:out value="${row.isResult() ? 'Попал' : 'Промазал'}" /></td>
                <td><c:out value="${row.getLocalDateTime()}" /></td>
                <td><c:out value="${row.getExecutionTime()}" /></td>
            </tr>
        </c:forEach>
    </table>

</body>
</html>