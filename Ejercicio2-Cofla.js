let free = false;
const validarCliente = tiempo =>{
    let edad = prompt("¿Cuantos años tienes?")
    if (edad < 18 ){
        alert(`No puedes pasar, eres menor de edad(${edad})`)
    } else {
        if (tiempo >= 2 && tiempo < 7 && !free){
            alert( `Puedes pasar y la entrada es gratis porque son las ${tiempo}`)
            free = true
        }else {
            alert("Puedes pasar")
        }
    }
}
validarCliente(12)
validarCliente(2)
validarCliente(1)
validarCliente(2)
validarCliente(24)

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i= 0; i < cantidad; i++){
    alumnosTotales[i]=[prompt("Nombre del alumno "+ (i+1)),0]
}

const asistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p"){
        alumnosTotales[p][1]++;
    }
}
for (i=0; i<30; i++){
    for (alumno in alumnosTotales){
        asistencia(alumnosTotales[alumno][0],alumno);
    }
}
for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    Asistencias: <b>${alumnosTotales[alumno][1]}</b><br>
    Inasistencias: <b>${30-alumnosTotales[alumno][1]}</b>`
    if (30-alumnosTotales[alumno][1]){
        resultado+= " Reprobado";
    }else{
        resultado+="<br><br>"
    }
    document.write(resultado)
}