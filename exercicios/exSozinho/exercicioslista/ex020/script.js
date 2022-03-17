function informar(){
    let mes = window.prompt('Digite o mês em extenso (ex: Abril)')
    let estacao = ''
    let res = document.querySelector('div#result')

    switch(mes.toLowerCase()){
        case 'janeiro': case 'fevereiro': case 'dezembro':
            estacao = 'VERÃO'
        break

        case 'março': case 'abril': case 'maio':
            estacao = 'PRIMAVERA'
        break

        case 'junho': case 'julho': case 'agosto':
            estacao = 'INVERNO'
        break

        case 'setembro': case 'outubro': case 'novembro':
            estacao = 'OUTONO'
        break
    }

    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <strong style="background-color: yellow;">${estacao}</strong>.</p>`
}