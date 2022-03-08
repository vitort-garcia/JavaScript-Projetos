var resul = document.querySelector('p')
document.querySelector('button').addEventListener('click', descontar) // querySelector pega sempre o primeiro elemento do seletor CSS.

function descontar(){
    var prod = window.prompt('Qual é o produto que você está comprando?')
    var preco = Number(window.prompt(`Qual é o preço de ${prod}?`))
    desc = preco - (preco*0.1)
    resul.innerHTML = `<h2>Calculando desconto de 10% para ${prod}:</h2>
                       <p>
                       O preço original era ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.
                       <br>
                       Você acaba de ganhar ${(preco*0.1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (10%).
                       <br>
                       No fim, você vai pagar ${desc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.
                       </p>`
}