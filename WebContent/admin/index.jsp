<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<h3>Olá <%=((model.Usuario)session.getAttribute("usuario")).getNome()%>, você está logado no sistema!</h3>
<a href="..\deslogar.jsp">deslogar</a>
</body>
</html>