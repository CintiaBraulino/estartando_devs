//Criar a função (inverter) que recebe uma string e retorna um inverso dela “salve” => “evlas”
	function inverter(s) {
        var palavra = '';
        for (var i = s.length - 1; i >= 0; i--) {
            palavra += s[i];
        }
        return palavra;
}
var x = inverter('cintia');
console.log(x);