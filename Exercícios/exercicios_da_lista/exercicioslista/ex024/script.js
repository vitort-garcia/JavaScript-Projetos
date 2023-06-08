function contar(){
    let res = document.querySelector('div#result')

    res.innerHTML += `<h2>Contagem regressiva de 10 a 1</h2>`
    for(cont = 10; cont >= 1; cont--){
        if(cont != 1){
            res.innerHTML += `${cont} &#x1F449`
        } else{
            res.innerHTML += `${cont} &#x1F3C1`
        }
    }
}