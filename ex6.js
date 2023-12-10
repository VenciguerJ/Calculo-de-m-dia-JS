(function(){
    /*
    criar um loop que pegue os dados da tablea
    coloque as notas nas variáveis (n1, n2, n3)
    colocar no campo média no campo do html
    */

    var trs = document.querySelectorAll('.pessoas');
    var $medias = document.querySelectorAll('.media');
    var n1, n2, n3;
    var medias = []
  
    function pegaNota(nota, pessoa){
        switch (nota){
            case 'n1':
                numero = document.querySelectorAll('.pessoas .nota-1');
                break;
            case 'n2':
                numero = document.querySelectorAll('.pessoas .nota-2');
                break;
            case 'n3':
                numero = document.querySelectorAll('.pessoas .nota-3');
                break;
            default:
                console.log('essa nota não existe')       
        }
        return parseFloat(numero[pessoa].textContent)
    }
    for (var i=0; trs[i]; i++) {
        n1 = pegaNota('n1', i);
        n2 = pegaNota('n2', i);
        n3 = pegaNota('n3', i);
        var media = calculaMedia(n1, n2, n3);
        medias[i] = media;
    }
    for(var i=0;$medias[i];i++){
        $medias[i].textContent = medias[i];
    }

})()