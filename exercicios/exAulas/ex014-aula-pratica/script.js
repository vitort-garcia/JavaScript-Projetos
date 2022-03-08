function carregar(){
    var mensg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var hora = new Date().getHours()
    mensg.innerHTML = `Agora são horas ${hora} horas!`
    if(hora >= 0 && hora < 12){
        //Bom Dia
        foto.src = 'manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if(hora >= 12 && hora <18){
        //Boa Tarde
        foto.src = 'tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else{
        //Boa noite
        foto.src = 'noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}