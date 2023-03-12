const input = document.querySelector(".input-1-clase");
document.write(`${input.className}<br>`)
document.write(`${input.value}<br>`)
document.write(`${input.type}<br>`)
input.minLength = "4";
input.required = " ";
// Modifica los estilos
input.style.color="red"
const titulo = document.querySelector(".titulo");
//Agrega clases o las remueve
titulo.classList.add("grande");
titulo.classList.remove("grande");
//Devuelve la clase 
titulo.classList.item("0");
titulo.classList.item("1");
//Comprueba si una etiqueta contiene una clase
titulo.classList.contains("grande")
//Si no contiene la clase la agrega y si la tiene la quita
titulo.classList.toggle("grande")
//Remplaza clases 
titulo.classList.replace("grande","pequeña")
//Devuelven contenido de la etiqueta (Texto plano)
titulo.textContent;
//Devuelve contenido de la etiqueta visible
titulo.innerText;
//Devuelve contenido de la etiqueta, incluyendo etiquetas
titulo.innerHTML;
//Devuelve contenido de la etiqueta, incluyendo etiquetas y html
titulo.outerHTML;