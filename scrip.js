function contar(){
    var inic = document.getElementById('ini')
    var fi = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')
    if(inic.value ==0 || passo.value == 0 || fi.value ==0){
        res.innerHTML='ERRO! Digite os números validos'
    }else {
        res.innerHTML ='Contando:<br>'

        var i = Number(inic.value)
        var f = Number(fi.value)
        var p = Number(passo.value)

        for(var c=i;c<=f; c += p ){
            res.innerHTML += ` ${c} -`
        }
        
        }
    

    
}
