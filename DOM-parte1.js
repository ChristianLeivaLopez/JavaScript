// Por id 
idd1 = document.getElementById('id1');
document.write(`${idd1} <br>`)
// Por etiqueta, devuelve una coleccion, se puede acceder a ellos con []
idd2 = document.getElementsByTagName("p");
document.write(`${idd2}<br>`)
document.write(`${idd2[0]}<br>`)
document.write(`${idd2[1]}<br>`)
document.write(`${idd2[2]}<br>`)
document.write(`${idd2[3]}<br>`)
document.write(`${idd2[4]}<br>`)
// Seleccionar por selectores
idd3 = document.querySelector(".id4")
document.write(`${id3} <br>`);
// Lista de nodos (selectores)
idd4 = document.querySelectorAll(".id4");
document.write(`${idd4} <br>`);
 