let idades = [];

function adicionarIdade() {
    let inputIdade = document.getElementById('idades');
    let idade = Number(inputIdade.value);

    if (isNaN(idade)) {
        document.getElementById('resultado').innerText = `Por favor, digite um número válido`;
    }

    if (idades.length < 20) {
        idades.push(idade);
        inputIdade.value = "";
        inputIdade.focus();
    } else {
        document.getElementById('resultado').innerText = `Você já adicionou 20 números!`;
    }
}

function calcularDobro() {
    if (idades.length < 20) {
        document.getElementById('resultado').innerText = `Adicione 20 idades antes de calcular!`;
        return;
    }

    let soma = 0;
    for (let i = 0; i < idades.length; i++) {
        soma += idades[i];
    }

    let media = soma / idades.length;

    let maioresQueMedia = idades.filter(idade => idade > media); 

    document.getElementById('resultado').innerHTML = 
        `A média das idades é ${media.toFixed(2)}.<br>` +
        `Idades maiores que a média: ${maioresQueMedia.join(", ")}.`;

}

document.getElementById("adicionarNumero").addEventListener("click", adicionarIdade);
document.getElementById("calcular").addEventListener("click", calcularDobro);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarIdade();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularMedia();
    }
});