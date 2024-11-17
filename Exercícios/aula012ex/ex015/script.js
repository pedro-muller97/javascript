function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/criancam.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/adolescentem.png')
            } else if (idade < 50) { 
                // adulto
                img.setAttribute('src', 'imagens/homem.png')
            }
            else {
                // idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/criancaf.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/adolescentef.png')
            } else if (idade < 50) { 
                // adulta
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                // idosa
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        }
}