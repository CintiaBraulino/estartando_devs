//Extra: Criar a função (fazerRelatorio) que recebe uma string e retorna um objeto com a própria string, o inverso da string e quantas vogais ela tem “salve” => { palavra: “salve”, palavraInverso: “evlas”, numeroVogais: 2 }
	function fazerRelatorio(s) {
        var palavra = '';
        letras= s.toLowerCase();
        var contador = 0;
        for (var i = letras.length - 1; i >= 0; i--) {
            palavra += letras[i];
            if(letras[i]=='a'|| letras[i]=='e'||letras[i]=='i'||letras[i]=='o'|| letras[i]=='u')
                contador += 1;
        }
        return [palavra,contador];
}
var palavraInicial = 'cintiA'
var x = fazerRelatorio(palavraInicial);
console.log("Palavra: "+palavraInicial+ ", PalavraInverso: "+x[0]+", numeroDeVogais: "+ x[1]);