function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
    // Teste: res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'midia/meninoBebe-pexels-taryn-elliott-3889819.jpg')
            } else if(idade < 21){
                // jovem
                img.setAttribute('src', 'midia/adolescenteGaroto-pexels-keira-burton-6147118.jpg')
            } else if(idade < 50){
                // adulto
                img.setAttribute('src', 'midia/homem-exels-elle-hughes-1680172.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'midia/idoso-pexels-juan-pablo-serrano-arenas-1139743.jpg')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'midia/meninaBebe-pexels-william-fortunato-6392806.jpg')
            } else if(idade < 21){
                // jovem
                img.setAttribute('src', 'midia/adolescenteGarota-pexels-anna-shvets-5325837.jpg')
            } else if(idade < 50){
                // adulta
                img.setAttribute('src', 'midia/mulher-pexels-katerina-holmes-5910994.jpg')
            } else {
                // idosa
                img.setAttribute('src', 'midia/idosa-pexels-marcus-aurelius-6787202.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //appendChild - Adicionar um elemento
    }

}