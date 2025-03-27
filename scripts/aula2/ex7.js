function Calcular() {
    let altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
    let peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));

    let imc = peso / (altura * altura);
    
    document.getElementById('resultado').innerText = `O IMC é = ${imc.toFixed(2)}`

    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";

    document.getElementById('altura').focus();
}

document.getElementById("calcular").addEventListener("click", Calcular);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Calcular();
    }
});