for (let i = 0; i < 6; i++){
    document.write(i+ "<br>");
}
for (let i = 6; i >= 0; i--){
    document.write(i+ "<br>");
}
for (let i = 0; i < 20; i++){
    document.write(i+ "<br>");
    if (i==12){
        break;
    }
}
for (let i = 0; i < 20; i++){
    if (i==12){
        continue;
    }
    document.write(i+ "<br>");
} 
let animales = ["perro", "gato", "conejo"];
for (animal in animales){
    document.write(animal,"<br>");
}
for (animal in animales){
    document.write(animales[animal],"<br>");
}
for (animal of animales){
    document.write(animal,"<br>");
}
array1=["maria", "josefa", "roberta"];
array2=["pedro", "marcelo", array1, "josefina"];
// forRancio:
for (let array in array2){
    if (array == 2){
        for (let array of array1){
            // continue forRancio;
            // break forRancio;
            document.write(array, "<br>");
        }
    }else{
        document.write(array2[array], "<br>");
    }
}