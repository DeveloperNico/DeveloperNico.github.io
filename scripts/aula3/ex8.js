function raizQuadrada() {
    let numero = document.getElementById('numero').value;

    if (numero < 0) {
        document.getElementById('resultado').innerText = "Por favor, digite um número válido maior qe zero.";
    }
    else {
        let raizQuadrada = Math.sqrt(numero);
        document.getElementById('resultado').innerText = `A raiz quadrada de ${numero} é = ${raizQuadrada.toFixed(2)}`;
    }

    document.getElementById('numero').value = "";
    document.getElementById('numero').focus();
}

document.getElementById("calcular").addEventListener("click", raizQuadrada);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        raizQuadrada();
    }
});