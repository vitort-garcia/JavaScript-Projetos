function contar(){
    let res = document.querySelector('div#result')
    let n1 = Number((document.getElementById('num')).value)

    res.innerHTML += `<h2>Contando de 0 até ${n1}</h2>`
    if(n1 < 0){
        for(n1; n1 <= 0; n1++){
            if(n1 != 0){
                res.innerHTML += `${n1} &#x1F448`
            } else{
                res.innerHTML += `${n1}`
            }
        }
    } else{
        let cont = 0
        for(cont; cont <= n1; cont++){
            if(cont != n1){
                res.innerHTML += `${cont} &#x1F449`
            } else{
                res.innerHTML += `${cont}`
            }
        }
    }
    res.innerHTML += `&#x1F3C1`
}