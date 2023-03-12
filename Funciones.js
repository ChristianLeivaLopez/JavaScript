function saludar(){
    respuesta = prompt("Hola, ¿Qué tal tu día?")
    if (respuesta == "bien"){
        alert("Me alegro");
    } else if (respuesta == "mal"){
        alert("Que pena");
    }
}
saludar()

function suma(num1,num2){
    let res = num1 + num2 + "<br>";
    return res;
}
let resultado= suma(32,41)
document.write(resultado);

function saludar(nombre){
    let frase = `Hola ${nombre}! ¿Cómo estas?`;
    document.write(frase)
}
saludar("chris")

const saludar = function(nombre){
    let frase = `Hola ${nombre}! ¿Cómo estas?`;
    document.write(frase)
}
saludar("chris")

const saludar = nombre => document.write(frase)

saludar("chris")

