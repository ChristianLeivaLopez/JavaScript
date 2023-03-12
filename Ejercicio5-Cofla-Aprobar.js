let materias = {
    Fisica:[100,4,80],
    Quimica:[90,8,80],
    Logica:[90,7,90],
    Programacion:[100,7,80],
    Redes:[10,5,60],
    Iso:[90,7,75],
    BBDD:[10,2,34],
}
const aprobado = ()=>{
    for (materia in materias){
        asistencias = materias[materia][0];
        promedio = materias[materia][1];
        practicas = materias[materia][2];
        console.log(`${materia}:`)
        if (asistencias >= 90){
            console.log("%cAsistencias en orden","color:green");
        }else{
            console.log("%cFalta de asistencias","color:red");
        } 
        if(promedio >= 7){
            console.log("%cPromedio en orden","color:green");
        }else{
            console.log("%cPromedio insuficiente","color:red");
        }
        if (practicas >= 75){
            console.log("%cPracticas en orden","color:green");
        }else{
            console.log("%cFaltan practicas","color:red");
        }
    }
}
aprobado()