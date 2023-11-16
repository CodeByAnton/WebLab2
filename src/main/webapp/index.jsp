<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="com.annton.web2.logic.AreaData" %>
<%@ page import="java.util.LinkedList" %>
<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web-Lab2</title>
    <style>
        <%@include file='style.css' %>
    </style>


</head>
<body>


<table class="main_table">

    <tr class="description">
        <td colspan="3">
            Выполнил: Мольдон Антон Сергеевич, Группа: P3211, Вариант: 3111
        </td>
    </tr>
    <tr class="large_row">
        <td class="date_handler">
            <p>
            <h2>Введите значения:</h2>
            </p>
            <form action="${pageContext.request.contextPath}/controller" method="post" name="form">

                <p>X:
                    <input type="text" name="X" id="X" placeholder="-3 to 3">
                <p id="validation-message-x" class="valid-message"></p>
                </p>


                <p>
                    Y:
                    <label>
                        <input type="checkbox" name="Y" value="-3"> -3
                    </label>
                    <label>
                        <input type="checkbox" name="Y" value="-2"> -2
                    </label>
                    <label>
                        <input type="checkbox" name="Y" value="-1"> -1
                    </label>
                    <label>
                        <input type="checkbox" name="Y" value="0"> 0
                    </label>
                    <label>
                        <input type="checkbox" name="Y" value="1"> 1
                    </label>
                    <label>
                        <input type="checkbox" name="Y" value="2"> 2
                    </label>
                    <label>
                        <input type="checkbox" name="Y" value="3"> 3
                    </label>
                    <label>
                        <input type="checkbox" name="Y" value="4"> 4
                    </label>
                    <label>
                        <input type="checkbox" name="Y" value="5"> 5
                    </label>
                <p id="validation-message-y" class="valid-message"></p>

                </p>
                <p>
                    R:
                    <select id="R" name="R">
                        <option value="1">
                            1
                        </option>
                        <option value="2">
                            2
                        </option>
                        <option value="3">
                            3
                        </option>
                        <option value="4">
                            4
                        </option>
                        <option value="5">
                            5
                        </option>
                    </select>
                <p id="validation-message-r" class="valid-message"></p>

                </p>


                <p>
                    <button id="submit-button" name="check">Проверить</button>
                </p>


                <p>
                    <button id="clean-button" name="clear">Очистить</button>
                </p>
            </form>


        </td>

        <td class="graphik">
                <canvas id="canvas">
                </canvas>


        </td>
    </tr>


</table>
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

<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="canvas.js"></script>
<script>
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            // Страница возвращена из кэша (кнопка "Назад" в браузере)
            location.reload();
        }
    });
</script>


</body>
</html>