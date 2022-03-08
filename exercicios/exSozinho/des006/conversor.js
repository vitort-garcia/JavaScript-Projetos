var resul = document.querySelector('section')
document.getElementsByTagName('button')[0].addEventListener('click', clicou)

function clicou(){
    var temp = Number(window.prompt('Digite uma temperatura em °C (Celsius)'))
    resul.innerHTML = `<h1>A temperatura de ${(temp).toLocaleString('pt-BR')}°C, corresponde a ...</h1>
    <p>
    ${(temp+273.15).toLocaleString('pt-BR')}°K (Kelvin)
    <br>
    ${((temp*9/5)+32).toLocaleString('pt-BR')}°F (Fahrenheit) 
    </p>`
}