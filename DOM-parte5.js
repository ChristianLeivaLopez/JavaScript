const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");
const textDelItem = document.createTextNode("Este es un item de la lista");
item.appendChild(textDelItem)
console.log(item)
contenedor.appendChild(textDelItem)
const fragmento =document.createDocumentFragment();
for (i=0 ; i<20 ; i++){
    const item =document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item); 
}
contenedor.appendChild(fragmento)
