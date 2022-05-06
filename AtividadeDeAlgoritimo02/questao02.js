//2 - Criar a função (contarNumeroVogais) que recebe uma string e retorna o número de vogais que ela tem (maiusculas e minusculas) “salve” => 2
	function contarNumeroVogais(s) {
        letras= s.toLowerCase();
        var contador = 0;
        for (var i = letras.length - 1; i >= 0; i--) {
            if(letras[i]=='a'|| letras[i]=='e'||letras[i]=='i'||letras[i]=='o'|| letras[i]=='u')
                contador += 1;
            }	
        return contador;
    }	
    var x = contarNumeroVogais('cintiA');
    console.log(x);