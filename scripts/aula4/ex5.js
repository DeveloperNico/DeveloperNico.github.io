let numeros = [];

function adicionarNumero() {
    let inputNumero = document.getElementById('numeros');
    let numero = Number(inputNumero.value);

    if (numero < 100 || numero > 200) {
        document.getElementById('resultado').innerText = `O número deve estar entre 100 e 200.`;
        return;
    }

    if (isNaN(numero)) {
        document.getElementById('resultado').innerText = `Por favor, digite um número válido.`;
        return;
    }

    if (numeros.length >= 8) {
        document.getElementById('resultado').innerHTML = 
        `Você já adicionou 8 números!<br>` + `Números adicionados: ${numeros.join(", ")}`;
        return;
    }

    numeros.push(numero);
    inputNumero.value = "";
    inputNumero.focus();

    document.getElementById('resultado').innerText = `Números adicionados: ${numeros.join(", ")}`;
}

document.getElementById("adicionarNumero").addEventListener("click", adicionarNumero);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarNumero();
    }
});
