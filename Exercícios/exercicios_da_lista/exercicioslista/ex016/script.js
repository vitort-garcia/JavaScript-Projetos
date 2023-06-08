function calcular(){
    let res = document.getElementById('resul')
    let ano_atual = new Date().getFullYear()
    let ano_nasc = Number(window.prompt('Em que ano você nasceu?'))

    res.innerHTML = `<p>Quem nasceu em ${ano_nasc} vai completar <strong>${ano_atual-ano_nasc}</strong> anos em ${ano_atual}</p>`
}