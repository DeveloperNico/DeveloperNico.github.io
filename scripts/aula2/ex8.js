function Calcular() {
    let anoAtual = Number(document.getElementById('anoAtual').value);

    if ((anoAtual % 4 == 0 && anoAtual % 100 != 0) || (anoAtual % 400 == 0)) {
        document.getElementById('resultado').innerText = `O ano ${anoAtual} é bisexto.`
    }
    else {
        document.getElementById('resultado').innerText = `O ano ${anoAtual} não é bisexto.`
    }

    document.getElementById('anoAtual').value = "";

    document.getElementById('anoAtual').focus();
}

document.getElementById("calcular").addEventListener("click", Calcular);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Calcular();
    }
});