function contar(){
    let res = document.querySelector('div#result')
    
    res.innerHTML += `<h2>Contando de 1 até 10</h2>`
    for(let cont = 1; cont <= 10; cont++){
        if(cont != 10){
            res.innerHTML += `${cont} &#x1F449`
        } else{
            res.innerHTML += `${cont} &#x1F3C1`
        }
    }
}