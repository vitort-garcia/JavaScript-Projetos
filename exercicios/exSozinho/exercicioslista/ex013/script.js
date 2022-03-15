function verificar(){
    var n1 = Number(prompt('Digite um número:'))
    var n2 = Number(prompt('Digite outro número:'))
    var res = document.getElementsByTagName('div')[0]

    if(n1 > n2){
        res.innerHTML = `<p>Analisando os valores <mark>${n1} e ${n2}</mark>, o maior valor é <strong>${n1}</strong>.</p>`
    } else{
        res.innerHTML = `<p>Analisando os valores <mark>${n1} e ${n2}</mark>, o maior valor é <strong>${n2}</strong>.</p>`
    }

}