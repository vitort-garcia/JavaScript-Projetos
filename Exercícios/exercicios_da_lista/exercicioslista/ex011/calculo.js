function calcular(){
    var res = document.getElementsByTagName('p')[0]
    var nome = prompt('Digite o nome do aluno:')
    var n1 = Number(prompt(`Qual a primeira nota de ${nome}?`))
    var n2 = Number(prompt(`Qual a segunda nota de ${nome}?`))
    var media = (n1 + n2)/2
    var msg = ''
    if (media > 6){
        msg = 'Meus parabéns!'
    } else{
        msg = 'Estude um pouco mais!'
    }

    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark></p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style="color:red;">${msg}</strong></p>`
}