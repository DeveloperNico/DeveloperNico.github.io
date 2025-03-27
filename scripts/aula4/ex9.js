let vetorA = [];
let vetorB = [];
let etapa = "A";

function adicionarNumero() {
    if (etapa === "A") {
        let inputNumeroA = document.getElementById('numerosA');
        let numerosA = Number(inputNumeroA.value);

        if (isNaN(numerosA)) {
            document.getElementById('resultado').innerText = 
                `Por favor, digite um número válido para o vetor A.`;
            return;
        }

        if (vetorA.length < 5) {
            vetorA.push(numerosA);
            inputNumeroA.value = "";
            inputNumeroA.focus();

            if (vetorA.length === 5) {
                etapa = "B"; // Muda para etapa B
                document.getElementById('resultado').innerText = 
                    `Vetor A completo: ${vetorA.join(", ")}\nAgora adicione números para o vetor B.`;
            }
        }
    } else if (etapa === "B") {
        let inputNumeroB = document.getElementById('numerosB');
        let numerosB = Number(inputNumeroB.value);

        if (isNaN(numerosB)) {
            document.getElementById('resultado').innerText = 
                `Por favor, digite um número válido para o vetor B.`;
            return;
        }

        if (vetorB.length < 5) {
            vetorB.push(numerosB);
            inputNumeroB.value = "";
            inputNumeroB.focus();

            if (vetorB.length === 5) {
                document.getElementById('resultado').innerHTML = 
                    `Vetor B completo: ${vetorB.join(", ")}<br>` +
                    `Ambos os vetores estão prontos!`;
            }
        }
    }
}

function alternarNumeros() {
    if (vetorA.length < 5 || vetorB.length < 5) {
        document.getElementById('resultado').innerText = 
            `Certifique-se de adicionar os números ao vetor A e ao vetor B antes de alternar!`;
        return;
    }

    let vetorC = [];

    for (let i = 0; i < vetorA.length; i++) {
        vetorC.push(vetorA[i]);
        vetorC.push(vetorB[i]);
    }

    document.getElementById("resultado").innerHTML = 
        "Vetor A: " + vetorA.join(", ") + "<br>" +
        "Vetor B: " + vetorB.join(", ") + "<br>" +
        "Vetor C (alternado): " + vetorC.join(", ");
}


document.getElementById("adicionarNumero").addEventListener("click", adicionarNumero);
document.getElementById("calcular").addEventListener("click", alternarNumeros);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alternarNumeros();
    }
});
