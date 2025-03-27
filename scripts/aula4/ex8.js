let vetorA = [];

function adicionarNumero() {
    let inputNumero = document.getElementById('numeros');
    let numero = Number(inputNumero.value);

    if (isNaN(numero)) {
        document.getElementById('resultado').innerText = `Por favor, digite um número válido`;
    }

    if (vetorA.length < 6) {
        vetorA.push(numero);
        inputNumero.value = "";
        inputNumero.focus();
    } else {
        document.getElementById('resultado').innerHTML = 
            `Você já adicionou 6 números!<br>` + 
            `Números adicionados: ${vetorA.join(", ")}`;
    }
}

function calcularMetade() {
    if (vetorA.length < 6) {
        document.getElementById('resultado').innerText = `Adicione 6 números antes de calcular!`;
        return;
    }

    let vetorB = vetorA.map(num => num / 2);

    document.getElementById("resultado").innerHTML = 
        "Valores originais: " + vetorA.join(", ") + "<br>" +
        "Valores na metade: " + vetorB.join(", ");

    vetorB = [];
}

document.getElementById("adicionarNumero").addEventListener("click", adicionarNumero);
document.getElementById("calcular").addEventListener("click", calcularMetade);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarNumero();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularMetade();
    }
});