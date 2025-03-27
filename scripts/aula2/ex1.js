function Calcular() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    let diferenca = numero1 - numero2;

    document.getElementById('resultado').innerText = `A diferença entre ${numero1} e ${numero2} é = ${diferenca}.`

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