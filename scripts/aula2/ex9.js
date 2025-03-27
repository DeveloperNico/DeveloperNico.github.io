function Calcular() {
    let taxa = parseFloat(document.getElementById('taxa').value.replace(',', '.'));
    let valorDesejado = parseFloat(document.getElementById('valorDesejado').value.replace(',', '.'));

    let conversao = valorDesejado / taxa;

    document.getElementById('resultado').innerText = `O valor desejado convertido é = ${conversao.toFixed(2)}`

    document.getElementById('taxa').value = "";
    document.getElementById('valorDesejado').value = "";

    document.getElementById('taxa').focus();
}

document.getElementById("calcular").addEventListener("click", Calcular);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Calcular();
    }
});