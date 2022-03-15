function verificar(){
    var ano_atual = new Date().getFullYear()
    var ano_nasc = document.getElementById('ano')
    ano_nasc = ano_nasc.value
    var idade = ano_atual - ano_nasc
    var resul = document.getElementById('result')
    
    if(idade < 0 || idade > 119){
        alert('[ERRO] Verifique os dados e tente novamente [ERRO]')
    } else{
        var genero = ''
        var radiores = document.getElementsByName('radsex')
        var image = document.createElement('img')
        
        if(radiores[0].checked){
            genero = 'homem'
            
            if(idade <= 10){
                image.setAttribute('src', 'criancaH.png')
            } else if(idade <= 19){
                image.setAttribute('src', 'jovemH.png')
            } else if(idade <= 59){
                image.setAttribute('src', 'adultoH.png')
            } else{
                image.setAttribute('src', 'idosoH.png')
            }

        } else if(radiores[1].checked){
            genero = 'mulher'

            if(idade <= 10){
                image.setAttribute('src', 'criancaM.png')
            } else if(idade <= 19){
                image.setAttribute('src', 'jovemM.png')
            } else if(idade <= 59){
                image.setAttribute('src', 'adultaM.png')
            } else{
                image.setAttribute('src', 'idosaM.png')
            }
        }
    
        resul.style.textAlign = 'center'
        resul.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        resul.appendChild(image)
    }
}