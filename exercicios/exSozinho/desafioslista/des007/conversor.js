var resul = document.querySelector('p') 
document.getElementsByTagName('button')[0].addEventListener('click', convert)

function convert(){
    var dolarhoje = Number(window.prompt('Qual a atual cotação do dólar?'))
    var reais = Number(window.prompt('Quantos R$ você tem na carteira?'))
    res = reais/dolarhoje
    resul.innerText = ('Você tem ' + res.toLocaleString('US', {style: 'currency', currency: 'USD'}) + ' na sua carteira.')
}