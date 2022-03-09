function verificar(){
    var anoAtual = new Date().getFullYear()
    var fAno = document.getElementById('txtano')
    var resul = document.getElementById('res')
    if(fAno.value < 1903 || fAno.value > anoAtual){
        alert('[ERRO] Verifique os dados e tente novamente [ERRO]')
    }
    else{
        var genero = ''
        var radiores = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fAno.value)
        var imag = document.createElement('img')
        imag.setAttribute('id', 'foto')
        if(radiores[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                imag.setAttribute('src', 'criancaH.png')
            } else if(idade < 21){
                imag.setAttribute('src', 'jovemH.png')
            } else if(idade < 60){
                imag.setAttribute('src', 'adultoH.png')
            } else{
                imag.setAttribute('src', 'idosoH.png')
            }
        }
        else{
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                imag.setAttribute('src', 'criancaM.png')
            } else if(idade < 21){
                imag.setAttribute('src', 'jovemM.png')
            } else if(idade < 60){
                imag.setAttribute('src', 'adultaM.png')
            } else{
                imag.setAttribute('src', 'idosaM.png')
            }
        }
        resul.style.textAlign = 'center'
        resul.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resul.appendChild(imag)
    }
}