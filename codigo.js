//let participante = "Federico Farias";
//let votante = 1155743908;
let button = document.getElementById("button"); //Asignamos valor a la variable button
button.addEventListener("click", calcular); //Al presionar el boton --> calcular
let binario = document.getElementById("binario"); //Asignamos valor a la variable binario
binario.addEventListener("click", calcularDesdeBinario) //Al presionar el boton --> calcularDesdeBinario
var votantes = document.getElementById("votantes"); //Asignamos valor a la variable votante
//votantes.innerText =  `Voto para ${participante} del numero ${votante}`; // Concatenacion de texto


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
    resultadoEnDecimal.innerText = `Tu numero decimal en binario es ${numeroBinario}`;
}

function calcularDesdeBinario(){
    let numero = Number(input.value);
    let cifra = 0;
   
    let resultado = 0;
    var resultadoEnDecimal = document.getElementById("resultado en binario");
        for (let i = 0; i < numero.toString().length ; i++) {
        if (numero.toString()[i] != 0 && numero.toString()[i] != 1){
             resultadoEnDecimal.innerText = `El numero no es binario`;
             return;
        }
     
        
    }
    let largo;
    largo = numero.toString().length;
      //  while (numero != 0) {     
        //cifra = numero % 10;     // obtengo la ultima cifra
        //numero =Math.floor(numero / 10);    // se la quito al número
        //nuevoNumero = nuevoNumero * 10 + cifra; // se la añado al nuevo número                                
    // }   
    //if (largo != numero.toString().length) {
      //  for (let i = 0; largo > numero.toString().length; i++) {
        //    numero = `${numero}0` 
            
        //}
       
    //}
        console.log(largo);
        for (let i = 0; i < Number(largo); i++) {
        cifra  = numero.toString()[i];
        resultado = Number(resultado) +  Number(cifra) * Math.pow(2, (Number(largo)-Number(i))-1);}
        console.log(`${resultado}`);
        resultadoEnDecimal.innerText = `Tu numero binario en decimal es ${resultado}`;

}