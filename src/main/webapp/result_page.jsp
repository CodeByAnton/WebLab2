<%@ page import="java.util.LinkedList" %>
<%@ page import="com.annton.web2.logic.AreaData" %><%--
  Created by IntelliJ IDEA.
  User: anton
  Date: 05.11.2023
  Time: 23:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Web-Lab2</title>
    <style>
        <%@include file='style.css' %>
    </style>

</head>
<body>
    <%LinkedList<AreaData> data = (LinkedList<AreaData>)  session.getAttribute("data");%>
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
    <%
        if (data != null) {
            for (AreaData row : data) {
    %>
    <tr>
        <td><%=row.getX()%></td>
        <td><%=row.getY()%></td>
        <td><%=row.getR()%></td>
        <td><%=row.isResult() ? "Попал" : "Промазал" %></td>
        <td><%=row.getLocalDateTime()%></td>
        <td><%=row.getExecutionTime()%></td>
    </tr>
    <%
            }
        }
    %>
</table>

</body>
</html>