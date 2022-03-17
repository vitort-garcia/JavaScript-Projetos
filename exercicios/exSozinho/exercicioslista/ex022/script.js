function contar(){
    let res = document.querySelector('div#result')
    
    res.innerHTML += '<h2>Contado de 1 a 10, marcando os pares</h2>'
    for(let cont = 1; cont <= 10; cont++){
        if(cont != 10){
            if(cont % 2 == 0){
                res.innerHTML += `<mark>${cont}</mark> &#x1F449`
            } else{
                res.innerHTML += `${cont} &#x1F449`
            }
        } else{
            res.innerHTML += `<mark>${cont}</mark> &#x1F3C1`
        }
    }
}