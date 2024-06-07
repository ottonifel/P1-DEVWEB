function buscarItinerarios() {
    var regiao = document.getElementById("busca").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // (readyState) é 4 (completo) e o status (status) é 200 (OK)
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("resultadoBusca").innerHTML = xhr.responseText;
        }
    };

    // AJAX
    xhr.open("POST", "buscaRegiaoServlet", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("tregiao=" + regiao);

    // Evitar o comportamento de refresh do form em html
    return false;
}
