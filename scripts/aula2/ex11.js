function Calcular() {
    let opcoes = ["pedra", "papel", "tesoura"];
    let escolhaUsuario = document.getElementById('escolhaUsuario').value;
    let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    document.getElementById('texto1').innerText = `Você escolheu ${escolhaUsuario}.`
    document.getElementById('texto2').innerText = `O computador escolheu ${escolhaComputador}.`

    if (escolhaUsuario === escolhaComputador) {
        document.getElementById('resultado').innerText = `Empate!`
    } 
    else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")) 
    {
        document.getElementById('resultado').innerText = `Você venceu!`
    } 
    else {
        document.getElementById('resultado').innerText = `O computador venceu!`
    }
}

document.getElementById("calcular").addEventListener("click", Calcular);


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Calcular();
    }
});