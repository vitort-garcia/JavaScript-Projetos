function tabuada(){
    var num = document.getElementById('numtab')
    var resul = document.getElementById('res')

    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    } else{
        num = Number(num.value)
        resul.innerText = ''
        for(var cont = 1; cont <= 10; cont++){
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${(num*cont)}`
            item.value = `tab${cont}`
            resul.appendChild(item)
        }
    }
}