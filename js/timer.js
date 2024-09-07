let timerInterval;
let isPaused = false;

const buttonIniciar = document.getElementById('button-iniciar');

function iniciarTimer() {
    const timerElement = document.getElementById('timer');
    const timerText = timerElement.textContent.split(':');
    const minutos = parseInt(timerText[0]);
    const segundos = parseInt(timerText[1]);

    timerElement.contentEditable = false; // Desabilita a edição enquanto o timer roda

    // Verifica se os valores são válidos
    if (isNaN(minutos) || isNaN(segundos) || minutos < 0 || segundos < 0) {
        alert('Por favor, insira valores válidos para minutos e segundos.');
        return;
    }

    // Calcula o tempo total em milissegundos
    const tempoTotalEmSegundos = minutos * 60 + (segundos + 1);


    // Define a data de término da contagem regressiva (em milissegundos)
    const countDownDate = new Date().getTime() + tempoTotalEmSegundos * 1000;

    // Inicia o timer imediatamente após definir a data de término
    timerInterval = setInterval(() => {
        const now = new Date().getTime();
        let distance = countDownDate - now;

        // Se o tempo acabar, para o intervalo
        if (distance < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00";
            const endaudio = document.getElementById("endbell");
            endaudio.play();
            return;
        }

        // Calcula minutos e segundos restantes
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza o display
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);

    const audio = document.getElementById("bell");
    audio.play();

}

function pausarTimer() {
    clearInterval(timerInterval);
    isPaused = true;
}

function resetarTimer() {
    clearInterval(timerInterval);
    isPaused = false;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = '00:00';
    timerElement.contentEditable = true;
    countDownDate = null; // Reinicia a data de término
}