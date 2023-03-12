let pc1 = {
    nombre: "Chris",
    procesador: "Intel Core i7",
    ram: "16GB",
    espacio: "1TB"
};
let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];
frase = `El nombre de mi PC es: <b> ${nombre}</b><br>
        El procesador es: <b>${procesador}</b><br>
        La ram  es: <b>${ram}</b><br>
        El espacio es: <b>${espacio}</b><br>`;
document.write(frase);