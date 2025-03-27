function converterParaMinutos() {
    let horario = document.getElementById('horario').value;

    if (!horario) {
        document.getElementById('resultado').innerText = "Por favor, insira um horário válido.";
        return;
    }

    let [horas, minutos] = horario.split(':').map(Number);
    let totalMinutos = (horas * 60) + minutos;

    document.getElementById('resultado').innerText = `${horario} em minutos é = ${totalMinutos} min.`;

    document.getElementById('horario').value = "";
    document.getElementById('horario').focus();
}

document.getElementById("calcular").addEventListener("click", converterParaMinutos);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        converterParaMinutos();
    }
});