let participante = "Federico Farias";
let votante = 1155743908;
let button = document.getElementById("button");
button.addEventListener("click", calcular);
let binario = document.getElementById("binario");
binario.addEventListener("click", calcularDesdeBinario)
var votantes = document.getElementById("votantes");
votantes.innerText =  "Voto para " + participante + " del numero " + votante;


function calcular(){
let numeroDecimal = Number(input.value);
var resultadoEnDecimal = document.getElementById("resultado en binario");
let numeroBinario = "";
while (numeroDecimal != 0 && numeroDecimal != 1) {
    numeroBinario = `${numeroDecimal%2}${numeroBinario}`;
    numeroDecimal = Math.floor(numeroDecimal/2);
    
}
numeroBinario = `1${numeroBinario}`;

for (let i = 0; numeroBinario.length%8 != 0; i++) {
    numeroBinario = `0${numeroBinario}`;}
    resultadoEnDecimal.innerText = `El numero en binario es ${numeroBinario}`;
}

function calcularDesdeBinario(){
    let numero = Number(input.value);
    let cifra = 0;
    let nuevoNumero = 0;
    let resultado = 0;
    var resultadoEnDecimal = document.getElementById("resultado en binario");
        for (let i = 0; i < numero.toString().length ; i++) {
        if (numero.toString()[i] != 0 && numero.toString()[i] != 1){
             resultadoEnDecimal.innerText = `El numero no es binario`;
             return;
        }
     
        
    }
        while (numero != 0) {        
        cifra = numero % 10;     // obtengo la ultima cifra
        numero =Math.floor(numero / 10);    // se la quito al número
        nuevoNumero = nuevoNumero * 10 + cifra; // se la añado al nuevo número                                
    }   
    
        for (let i = 0; i < nuevoNumero.toString().length ; i++) {
        cifra  = nuevoNumero.toString()[i];
        resultado = resultado +  Number(cifra) * Math.pow(2, Number(i));}
        resultadoEnDecimal.innerText = `Tu numero binario en decimal es ${resultado}`;

}