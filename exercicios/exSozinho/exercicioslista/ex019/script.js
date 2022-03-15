function iniciar(){
    var res = window.document.getElementsByTagName('div')[0]
    var n1 = Number(window.prompt('Primero valor:'))
    var n2 = Number(window.prompt('Segundo valor:'))
    var opc = Number(window.prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    
    switch(opc){

        case 1:
            res.innerHTML = `<h2>Calculando</h2> <p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
        break
        case 2:
            res.innerHTML = `<h2>Calculando</h2> <p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
        break
        case 3:
            res.innerHTML = `<h2>Calculando</h2> <p>${n1} * ${n2} = <strong>${n1*n2}</strong></p>`
        break
        case 4:
            res.innerHTML = `<h2>Calculando</h2> <p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong></p>`
        break
        default:
            res.innerHTML = `<h2>Calculando</h2> <p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`
        break
    }
}