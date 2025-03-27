let numeros = [];

function adicionarNumero() {
    let inputNumero = document.getElementById('numeros');
    let numero = Number(inputNumero.value);

    if (isNaN(numero)) {
        document.getElementById('resultado').innerText = `Por favor, digite um número válido`;
    }

    if (numeros.length < 5) {
        numeros.push(numero);
        inputNumero.value = "";
        inputNumero.focus();
    } else {
        document.getElementById('resultado').innerText = `Você já adicionou 5 números!`;
    }
}

function calcularDobro() {
    if (numeros.length < 5) {
        document.getElementById('resultado').innerText = `Adicione 5 números antes de calcular!`;
        return
    }

    let dobrados = numeros.map(num => num * 2);

    document.getElementById("resultado").innerHTML = 
        "Valores originais: " + numeros.join(", ") + "<br>" +
        "Valores dobrados: " + dobrados.join(", ");

    numero = [];
}

document.getElementById("adicionarNumero").addEventListener("click", adicionarNumero);
document.getElementById("calcular").addEventListener("click", calcularDobro);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarNumero();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularDobro();
    }
});