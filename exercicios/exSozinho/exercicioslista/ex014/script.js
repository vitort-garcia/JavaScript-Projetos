function interagir(){
    var dia = new Date()
    var resul = document.getElementsByTagName('div')[0]
    resul.innerHTML = `<p>O que eu recebi do sistema foi <mark>${dia}</mark></p>`
}