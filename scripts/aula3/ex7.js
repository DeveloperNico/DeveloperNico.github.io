function contarCedulas() {
    let valor = document.getElementById('valor').value;
    valor = parseInt(valor);

    const cedulas = [200, 100, 50, 20, 10, 5, 1];
    let resultado = ""; // Variável para armazenar o resultado final

    if (isNaN(valor) || valor <= 0) {
        resultado = "Por favor, insira um valor válido maior que zero.";
    }
    else {
        for (let i = 0; i < cedulas.length; i++) {
            let quantidade = Math.floor(valor / cedulas[i]);
            if (quantidade > 0) {
                resultado += `${quantidade} cédula(s) de R$${cedulas[i]} <br>`; // Concatenar o resultado
            }
            valor = valor % cedulas[i];
        }
    }

    // Exibir o resultado final
    document.getElementById('resultado').innerHTML = resultado; // Usar innerHTML para permitir tags HTML (como <br>)

    // Limpar o campo de entrada e dar foco novamente
    document.getElementById('valor').value = "";
    document.getElementById('valor').focus();
}

document.getElementById("calcular").addEventListener("click", contarCedulas);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        contarCedulas();
    }
});