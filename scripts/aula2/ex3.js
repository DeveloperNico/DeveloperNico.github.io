function Calcular() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    if (numero1 % numero2 == 0) {
        document.getElementById('resultado').innerText = `O número ${numero2} é múltiplo de ${numero1}`
    }
    else {
        document.getElementById('resultado').innerText = `O número ${numero2} não é múltiplo de ${numero1}`
    }

    document.getElementById('numero1').value = "";
    document.getElementById('numero2').value = "";

    document.getElementById('numero1').focus();
}

document.getElementById("calcular").addEventListener("click", Calcular);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Calcular();
    }
});