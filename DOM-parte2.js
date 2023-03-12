const rangoEdad = document.querySelector(".rango");
// Primero atributo, segundo el nuevo valor del atributo
rangoEdad.setAttribute("type","text")
// Obtener valor del atributo
const valor = rangoEdad.getAttribute("type")
document.write(`<br>${valor}`)
// Remover valor atributo
rangoEdad.removeAttribute("type")