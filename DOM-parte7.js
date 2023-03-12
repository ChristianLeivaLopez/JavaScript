const contenedor = document.querySelector(".contenedor");
const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2Antiguo = document.querySelector(".h2");
const h2Nuevo = document.createElement("H2");
h2Nuevo.innerHTML = "Titulo";
// contenedor.replaceChild(h2Nuevo,h2Antiguo);
// contenedor.removeChild(h2Antiguo)
contenedor.hasChildNodes();
h2Antiguo.parentElement;
h2Antiguo.parentNode;
h2Antiguo.nextSibling;
h2Antiguo.previousSibling;
h2Antiguo.nextElementSibling;
h2Antiguo.previousElementSibling;
h2Antiguo.closest(".h2");
