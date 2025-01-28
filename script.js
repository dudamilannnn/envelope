function abrirEnvelope() {
    const flap = document.querySelector('.envelope .flap');
    const envelope = document.querySelector('.envelope');
    const mensagem = document.getElementById('mensagem');

    flap.style.transform = 'perspective(400px) rotateX(-180deg)';

    setTimeout(() => {
        envelope.style.opacity = '0';
        envelope.style.pointerEvents = 'none';
    }, 1000);

    setTimeout(() => {
        mensagem.style.display = 'block';
    }, 1200);
}