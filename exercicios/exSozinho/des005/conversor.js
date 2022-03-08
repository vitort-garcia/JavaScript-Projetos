function clicou(){
    var dist = Number(window.prompt('Digite uma distância em metros (m)'))
    var mud = document.getElementsByTagName('section')[0]
    mud.innerHTML = `<h2>A distância de ${dist.toLocaleString('pt-BR')} metros, corresponde a...</h2>
                     <p>${(dist/1000).toLocaleString('pt-BR')} quilômetros (Km)
                     <br>
                     ${(dist/100).toLocaleString('pt-BR')} hectômetros (Hm)
                     <br>
                     ${(dist/10).toLocaleString('pt-BR')} decâmetros (Dam)
                     <br>
                     ${(dist/0.1).toLocaleString('pt-BR')} decímetros (dm)
                     <br>
                     ${(dist/0.01).toLocaleString('pt-BR')} centímetros (cm)
                     <br>
                     ${(dist/0.001).toLocaleString('pt-BR')} milímetros (mm)
                     </p>`
}