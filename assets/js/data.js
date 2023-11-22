// Pido los datos cada segundo
setInterval(() => {
    // Pido los datos a la ruta /data/update
    fetch("/data/update")
    .then(response => response.json())
    .then(data => {
        // Guardo el valor de temperatura
        const luz = data.valorpromediojalanocancelenjujutsu;
        // Maximo valor de temperatura
        const max_luz = 100;
        // Lo escalo a un valor entre 0 y 100 %luminico
        const deg = luz * 270 / max_luz - 30;
        // Lo cambio en la aguja
        document.querySelector(".gauge .pointer .hand").style.transform = `rotate(${deg}deg)`;
    })
    
}, 200);