
function verificar(){
    var data = new Date()/*pega data atual */
    var anoatual = data.getFullYear()/*pega ano atual com 4 dígitos*/
    var fano = document.getElementById('txtano')/*a var fano recebe o ano digitado*/
    var res = document.querySelector('div#res')/*var res recebe*/
   
    /*validação*/ 
    if (fano.value.length == 0 || Number(fano.value) > anoatual || Number(fano.value) < 1900) {
        window.alert('Insira um ano válido')

    }else {

        var fsex = document.getElementsByName('radsex')/*Esse tipo de seletor é o melhor para ser utilizado quando há radio e tem várias opções mas apenas uma pode ser marcada*/
        var idade = anoatual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        if(fsex[0].checked) {
            genero ='homem'
            if(idade > 0 && idade <= 10){
                /*criança*/
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade > 10 && idade <= 40){
                /*jovem*/
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 40 && idade <= 50 ){
                /*adulto*/
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'foto-idoso-m.png')
            }


        } else if(fsex[1].checked) {
            genero ='mulher'

            if(idade > 0 && idade <= 10){
                /*criança*/
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade > 10 && idade <= 40){
                /*jovem*/
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 40 && idade < 50 ){
                /*adulto*/
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }

        
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }

   
    
}