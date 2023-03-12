let nota = prompt("Ingrese una nota");

if (nota >= 0 && nota <= 10) {
  if (nota < 5) {
    document.write("Suspenso");
  } else if (nota < 6) {
    document.write("Aprobado");
  } else if (nota < 8) {
    document.write("Bien");
  } else if (nota < 10) {
    document.write("Notable");
  } else if (nota == 10) {
    document.write("Sobresaliente");
  }
} else {
  document.write("La nota debe estar entre 0 y 10");
}
