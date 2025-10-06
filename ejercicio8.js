let palabra = prompt("Introduce una palabra"," ");

function invertirPalabra(palabra){
    return palabra.split('').reverse().join('');
}
console.log("La palabra invertida es: " + invertirPalabra(palabra));