function sortear(){
    let min = 1
    let max = 101
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)

    //window.alert(`aleatorio = ${aleatorio}`)

    let res = document.getElementById('resul')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar(){
    let res = document.querySelector('div#resul')
    res.innerHTML = `<p>Cada vez que você apertar o botão acima eu penso em um número de 1 a 100.</p>`
}