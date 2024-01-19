function relogio () {
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio')
    let segundos = 0;
    let timer;
    
    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos)}, 1000);
    }
     
    document.addEventListener('click', function (event) {
        const elemento = event.target;
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciarRelogio()
        }
        if (elemento.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('pausado')
        }
        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0
        }
    });
}

relogio ();
