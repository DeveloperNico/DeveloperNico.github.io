let numeros = [];

function adicionarNumero() {
    let inputNumero = document.getElementById('numeros');
    let numero = Number(inputNumero.value);

    if (isNaN(numero)) {
        document.getElementById('resultado').innerText = `Por favor, digite um número válido`;
    }

    if (numeros.length < 8) {
        numeros.push(numero);
        inputNumero.value = "";
        inputNumero.focus();
    } else {
        document.getElementById('resultado').innerText = `Você já adicionou 8 números!`;
    }
}

function calcularMedia() {
    if (numeros.length < 8) {
        document.getElementById('resultado').innerText = `Adicione 8 números antes de calcular!`;
        return;
    }

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    let media = soma / numeros.length;

    document.getElementById("resultado").innerHTML = 
        "Valores digitados: " + numeros.join(", ") + "<br>" +
        "Média aritmética: " + media.toFixed(2);
}

document.getElementById("adicionarNumero").addEventListener("click", adicionarNumero);
document.getElementById("calcular").addEventListener("click", calcularMedia);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarNumero();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularMedia();
    }
});