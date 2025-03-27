let numeros = [];

function adicionarNumero() {
    let inputNumero = document.getElementById('numeros');
    let numero = Number(inputNumero.value);

    if (isNaN(numero)) {
        document.getElementById('resultado').innerText = `Por favor, digite um número válido`;
    }

    if (numeros.length < 10) {
        numeros.push(numero);
        inputNumero.value = "";
        inputNumero.focus();
    } else {
        document.getElementById('resultado').innerText = `Você já adicionou 10 números!`;
    }
}

function filtrarPares() {
    if (numeros.length < 10) {
        document.getElementById('resultado').innerText = `Adicione 10 números antes de calcular!`;
        return;
    }

    let pares = numeros.filter(numero => numero % 2 === 0);
    
    if (pares.length > 0) {
        document.getElementById('resultado').innerHTML = 
            `Os números pares são ${pares.join(", ")}.`;
    }
    else {
        document.getElementById('resultado').innerHTML = 
            `Todos os números são ímpares`;
    }
}

document.getElementById("adicionarNumero").addEventListener("click", adicionarNumero);
document.getElementById("calcular").addEventListener("click", filtrarPares);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarNumero();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        filtrarPares();
    }
});