var min = 1
var max = 101
var dif = max - min
var aleatorio = Math.random()
var num = min + Math.trunc(dif * aleatorio)

function palpitar(){
    var palp = window.prompt('Qual é o seu palpite?')
    var res = document.querySelector('div#resul')
    if (palp > num){
        res.innerHTML += `<p>Você falou ${palp}. Meu número é <strong>MENOR</strong></p>`
    } else if(palp < num){
        res.innerHTML += `<p>Você falou ${palp}. Meu número é <strong>MAIOR</strong></p>`
    } else{
        
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha escolhido o valor ${num}!</p>`
        document.getElementsByTagName('button')[0].style.visibility = 'hidden'
    }
}
