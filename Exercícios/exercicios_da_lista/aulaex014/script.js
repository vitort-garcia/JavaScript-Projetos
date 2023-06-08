function carregou(){
    var hora = new Date().getHours()
    var imagem = document.getElementById('imag')
    var resul = document.getElementById('result')
    resul.innerText = `Agora são ${hora} horas.`

    if(hora < 12 && hora >= 5){
        imagem.src = 'manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if(hora < 18 && hora >= 12){
        imagem.src = 'tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else{
        imagem.src = 'noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}