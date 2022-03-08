var hora = new Date() // .getHours() aqui mesmo já serviria
hora = hora.getHours
console.log(`Agora são exatamente ${hora} horas!`)
if(hora < 12 && hora >= 5){
    console.log('Bom dia!')
} else if(hora < 5){
    console.log('Boa madrugada!')
} else if(hora < 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
} 
