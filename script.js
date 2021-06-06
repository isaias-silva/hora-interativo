function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas!`;

    if (hora >= 0 && hora < 12) {

        img.src = "img/dia.png"
            //bom dia

        window.document.body.style.background = "rgb(0, 58, 112)";
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "img/tarde.png"

        window.document.body.style.background = "rgb(248, 170, 0)";
    } else {
        //boa noite
        img.src = "img/noite.png"
        window.document.body.style.background = "black";
    }
}