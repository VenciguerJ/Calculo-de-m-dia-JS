
    function calculaMedia(){
        var somaTotal = 0;
        
        for (var index = 0; typeof arguments[index] === 'number'; index++){
            somaTotal += arguments[index];
        }
        var media = (somaTotal / index);
        return media;
    };

    function teste(){
        console.log(arguments);
    }
