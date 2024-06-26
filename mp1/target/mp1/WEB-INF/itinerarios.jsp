<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./styles/header.css">
    <link rel="stylesheet" href="./styles/footer.css">
    <link rel="stylesheet" href="./styles/itinerario.css">

    <link rel="shortcut icon" type="imagex/svg" href="./Assets/bee-svgrepo-com-1.svg">
    <title>Itinerario</title>
</head>
<body>
    <header>
        <div id="logo">
            <div>
                <img src="./Assets/bee-origami-paper-svgrepo-com.svg" alt="abelha de origami" height="42">
            </div>

            <div>
                <h1>Busbus</h1>
            </div>
        </div>
            
        <nav class="menu">
             <ul> <!-- Menu de navegação -->
                 <li><a href="./index.html">Home</a></li>
                 <div class="dropdown">
                    <button class="dropbtn">Rotas</button>
                    <div class="dropdown-content">
                      <a href="#">Itinerários</a>
                      <a href="./cadastro.html">Cadastro de itinerários</a>
                    </div>
                  </div> 
                 <li><a href="#">História</a></li>
                 <li><a href="#">Cartão</a></li>
                 <li><a href="#">Transparência</a></li>
             </ul>
        </nav>
    </header>

    <!-- CONTEÚDO DA PÁGINA ITINERARIO -->
    <section>
        <h1>Itinerários</h1>

		<form method="post" action="buscaRegiaoServlet">
			<input type="text" id="busca" placeholder="Busca por região" name="tregiao"/>
            <button>→</button>
		</form>

    </section>
    <!-- FIM DO CONTEÚDO DA PÁGINA DE ITINERÁRIOS -->

    <footer>
        <div id="logo-footer">
            <img src="./Assets/bee-svgrepo-com-2.svg" alt="abelhinha" height="60">
            <h2>Busbus</h2>
        </div>
        <nav class="menu-footer">
            <h3>Links rápidos</h3>
            <ul>
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li><a href="#">Rotas</a></li>
                 <li><a href="#">História</a></li>
                 <li><a href="#">Cartão</a></li>
                 <li><a href="#">Transparência</a></li>
            </ul>
        </nav>
        <div class="info-footer">
            <h3>Universidade Federal de São Carlos <br> Campus Sorocaba</h3>

            <p>
                Desenvolvimento Web <br>
                Mini Projeto 1 <br> 
                Grupo: <br>
                Bruna Scarpelli, Felipe Ottoni, Gustavo Kis, Letícia Almeida e Ricardo Suzuki.
            </p>
        </div>
    </footer>
</body>
</html>
