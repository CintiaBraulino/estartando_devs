//Extra2: Se receber algo diferente de string da um console.log(“oh carai”) e retorna undefined
	function fazerRelatorio(s) {
    		if(typeof s == "string"){
    		var palavra = '';
    		letras= s.toLowerCase();
    		var contador = 0;
    			for (var i = letras.length - 1; i >= 0; i--) {
        		palavra += letras[i];
        			if(letras[i]=='a'|| letras[i]=='e'||letras[i]=='i'||	letras[i]=='o'|| letras[i]=='u')
        			contador += 1;
   			 }
    			return [palavra,contador];
    		}else{
    			console.log("oh carai")
    			return undefined;
    		}
	}


	var palavraInicial = 'Marcelo'
	var x = fazerRelatorio(palavraInicial);
	if(x != undefined){
   	 console.log("Palavra: "+palavraInicial+ ", PalavraInverso: "+x[0]+", numeroDeVogais: "+ x[1]);
	}