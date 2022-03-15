function verificar(){
    var ano_atual = new Date().getFullYear()
    var ano_nasc = document.getElementById('ano')
    ano_nasc = ano_nasc.value
    idade = ano_atual - ano_nasc
    var resul = document.getElementById('result')

    if(idade > 119){
        alert('[ERRO] Verifique os dados e tente novamente [ERRO]')
    } else{

        var genero = ''
        var radiores = document.getElementsByName('radsex')
        var imagem = document.createElement('img')
        if(radiores[0].checked){
            genero = 'homem'
            if(idade <= 11){
                imagem.setAttribute('src', 'criancaH.png')
            } else if(idade <= 19){
                imagem.setAttribute('src', 'jovemH.png')
            } else if(idade <= 59){
                imagem.setAttribute('src', 'adultoH.png')
            } else{
                imagem.setAttribute('src', 'idosoH.png')
            }
        } else{
            if(idade <= 11){
                imagem.setAttribute('src', 'criancaM.png')
            } else if(idade <= 19){
                imagem.setAttribute('src', 'jovemM.png')
            } else if(idade <= 59){
                imagem.setAttribute('src', 'adultaM.png')
            } else{
                imagem.setAttribute('src', 'idosaM.png')
            }
        }
        resul.style.textAlign = 'center'
        resul.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        resul.appendChild(imagem)
    }
}