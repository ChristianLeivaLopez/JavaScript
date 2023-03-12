const obtenerInformacion = materia=>{
    materias = {
        fisica: ["P. Marcos","Pedro", "juan", "pepito","maria"],
        programacion: ["P. Carmen","Pedro","Juan","Pepito"],
        logica: ["P. Pablo","Pedro", "Pepito", "Cofla"],
        quimica: ["P. Maria","Pedro", "Juan", "Pepito", "Cofla", "Maria"]
    }
    if (materias[materia] !== undefined){
        alumnos = materias[materia];
        profesor = alumnos.shift();
        return materia
    }else{
        return materias;
    }
}
const mostrarInformacion = materia =>{
    let info = obtenerInformacion(materia);
    if (info !== false){
        document.write(`Materia: <b style=color:red>${info}</b><br>
        Profesor: <b style=color:blue>${profesor}</b><br>
        Alumnos: <b>${[alumnos]}</b><br><br>`)
    }
}
const numeroClasesAlumno = alumno=>{
    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    clases = [];
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            clases.push(` ${info}`);
            cantidadTotal++;
        }
    }
    document.write(`El alumno<b style= color:blue> ${alumno} </b>esta en <b>${cantidadTotal} </b>clases:<b style=color:red> ${clases}</b>
    <br><br>`)
}
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");
numeroClasesAlumno("Cofla")
numeroClasesAlumno("Pedro")
numeroClasesAlumno("Pepito")
numeroClasesAlumno("Maria")
numeroClasesAlumno("Juan")