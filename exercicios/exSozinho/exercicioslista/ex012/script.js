function verificar(){
    var n1 = window.prompt('Digite um número:')
    var resul = document.getElementsByTagName('div')[0]

    if(n1%2 == 0){
        resul.innerHTML = `<p>O número ${n1} que foi digitado é <strong>PAR!</strong></p>`
    } else{
        resul.innerHTML = `<p>O número ${n1} que foi digitado é <strong>ÍMPAR!</strong></p>`
    }
}