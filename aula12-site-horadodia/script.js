function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img.config-fotos')
    var data = new Date()
    var hora = data.getHours()
 
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        // bom dia
        img.src = 'midia/manha-pexels-todd-trapani-1420440.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <= 18){
        // boa tarde
        img.src = 'midia/tarde-pexels-simon-berger-1266810.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.src = 'midia/noite-pexels-igor-6325001.jpg'
        document.body.style.background = '#36648B'
    }
}



