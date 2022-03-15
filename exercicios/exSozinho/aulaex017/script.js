function contador(){
    var inicio = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passos')
    var resul = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados [ERRO]')
    }else{
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if(passo <= 0){
            alert('Passo inválido. Considerando passo 1')
            passo = 1
        }
        resul.innerText = 'Contando:'
        if(inicio < fim){
            while(inicio <= fim){
                if(inicio != fim && inicio + passo <= fim){
                    resul.innerHTML += `${inicio} &#x1F449`
                    inicio += passo
                } else{
                    resul.innerHTML += `${inicio} &#x1F3C1`
                    inicio += passo
                }
            }
        } else if(inicio > fim){
            while(inicio >= fim){
                if(inicio != fim && inicio - passo >= fim){
                    resul.innerHTML += `${inicio} &#x1F449`
                    inicio -= passo
                } else{
                    resul.innerHTML += `${inicio} &#x1F3C1`
                    inicio -=passo
                }
            }
        }
    }
}