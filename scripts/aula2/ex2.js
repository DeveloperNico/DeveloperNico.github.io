function Calcular() {
    let numero = Number(document.getElementById('numero').value);

    if (numero % 2 == 0) {
        document.getElementById('resultado').innerText = `O número ${numero} é par.`
    }
    else {
        document.getElementById('resultado').innerText = `O número ${numero} é ímpar.`
    }

    document.getElementById('numero').value = "";

    document.getElementById('numero').focus();
}

document.getElementById("calcular").addEventListener("click", Calcular);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Calcular();
    }
});