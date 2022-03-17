function contar(){
    let res = document.querySelector('div#result')

    res.innerHTML += `<h2>Números pares de 1 até 10</h2>`
    for(cont = 2; cont <= 10; cont += 2){
        if(cont != 10){
            res.innerHTML += `${cont} &#x1F449`
        } else{
            res.innerHTML += `${cont} &#x1F3C1`
        }
    }
}