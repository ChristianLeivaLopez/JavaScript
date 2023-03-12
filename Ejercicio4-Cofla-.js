let materias = {
    fisica:["Pedro","Maria","Juan","Francisco"],
    logica:["Maria","Carmen","Juan","Pedro","Marcos"],
    programacion:["Carmen","Mohamed","Pedro"]
}
const inscribirseMateria = (alumno, materia)=>{
    personas = materias[materia];
    if (personas.length >= 20){
        document.write(`<b>La clase de ${materia} esta llena</b><br>`);
    }else{
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica']
            } 
        }else if(materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas
            }
        }else if(materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica']
            }
        }
        document.write(`Felicidades <b style=color:red>${alumno}</b>! Te has inscrito a ${materia} correctamente.<br>`)
    }
}
inscribirseMateria("alumno1","fisica");
inscribirseMateria("alumno2","fisica");
inscribirseMateria("alumno3","fisica");
inscribirseMateria("alumno4","fisica");
inscribirseMateria("alumno5","fisica");
inscribirseMateria("alumno6","fisica");
inscribirseMateria("alumno7","fisica");
inscribirseMateria("alumno8","fisica");
inscribirseMateria("alumno9","fisica");
inscribirseMateria("alumno10","fisica");
inscribirseMateria("alumno11","fisica");
inscribirseMateria("alumno12","fisica");
inscribirseMateria("alumno13","fisica");
inscribirseMateria("alumno14","fisica");
inscribirseMateria("alumno15","fisica");
inscribirseMateria("alumno16","fisica");
inscribirseMateria("alumno17","fisica");
inscribirseMateria("alumno18","fisica");
inscribirseMateria("alumno1","logica");
inscribirseMateria("alumno2","logica");
inscribirseMateria("alumno3","logica");
inscribirseMateria("alumno4","logica");
inscribirseMateria("alumno5","logica");
inscribirseMateria("alumno6","logica");
inscribirseMateria("alumno7","logica");
inscribirseMateria("alumno8","logica");
inscribirseMateria("alumno9","logica");
inscribirseMateria("alumno10","logica");
inscribirseMateria("alumno11","logica");
inscribirseMateria("alumno12","logica");
inscribirseMateria("alumno13","logica");
inscribirseMateria("alumno14","logica");
inscribirseMateria("alumno15","logica");
inscribirseMateria("alumno16","logica");
inscribirseMateria("alumno17","logica");
inscribirseMateria("alumno18","logica");
inscribirseMateria("alumno1","programacion");
inscribirseMateria("alumno2","programacion");
inscribirseMateria("alumno3","programacion");
inscribirseMateria("alumno4","programacion");
inscribirseMateria("alumno5","programacion");
inscribirseMateria("alumno6","programacion");
inscribirseMateria("alumno7","programacion");
inscribirseMateria("alumno8","programacion");
inscribirseMateria("alumno9","programacion");
inscribirseMateria("alumno10","programacion");
inscribirseMateria("alumno11","programacion");
inscribirseMateria("alumno12","programacion");
inscribirseMateria("alumno13","programacion");
inscribirseMateria("alumno14","programacion");
inscribirseMateria("alumno15","programacion");
inscribirseMateria("alumno16","programacion");
inscribirseMateria("alumno17","programacion");
inscribirseMateria("alumno18","programacion");
let fisica = materias['fisica'];
let logica = materias['logica'];
let programacion = materias['programacion'];
document.write(`Lista de alumnos<br>
<b>Fisica</b>: <b style=color:red>${fisica}</b><br>
<b>Logica</b>:<b style=color:red> ${logica}</b><br>
<b>Programacion</b>: <b style=color:red>${programacion}</b>`)