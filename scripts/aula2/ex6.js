function Calcular() {
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);

    let media = (nota1 + nota2) / 2;

    if (media >= 5) {
        document.getElementById('resultado').innerText = `A média ${media} está acima da média.`
    }
    else {
        document.getElementById('resultado').innerText = `A média ${media} está abaixo da média.`
    }

    if (media % 2 == 0) {
        document.getElementById('resultado2').innerText = `A média ${media} é par.`
    }
    else {
        document.getElementById('resultado2').innerText = `A média ${media} é ímpar.` 
    }

    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";

    document.getElementById('nota1').focus();
}

document.getElementById("calcular").addEventListener("click", Calcular);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Calcular();
    }
});
