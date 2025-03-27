function Calcular() {
    let numero = Number(document.getElementById('numero').value);

    document.getElementById('resultado'). innerHTML = "";

    for (i=1; i<=10; i++) {
        let resultado = numero * i;
        document.getElementById('resultado').innerText += `${numero} x ${i} = ${resultado}\n`
    }

    document.querySelector('.container').classList.add('expandido');
    document.querySelector('h1').classList.add('margin');

    document.getElementById('numero').value = "";

    document.getElementById('numero').focus();
}

document.getElementById("calcular").addEventListener("click", Calcular);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Calcular();
    }
});