class aplicacion{
    constructor(descargas, puntuacion, peso){
        this.descargas= descargas;
        this.puntuacion= puntuacion;
        this.peso= peso;
        this.instalada= false;
        this.iniciada= false;
    }
    instalar(){
        if (this.instalada == false){
            alert("La aplicacion se ha instalado");
            this.instalada=true;
        }else {
            alert("La aplicacion ya esta instalada.");
        }
    }
    desinstalar(){
        if (this.instalada == true){
            alert("La aplicacion se va a desinstalar");
            this.instalada=false;
        }else{
            alert("La aplicacion no está instalada");
            }
    }
    iniciar(){
        if (this.iniciada == false && this.instalada == true){
            alert("La aplicacion se va a iniciar");
            this.iniciada=true;
        }else{
            if (this.iniciada == false && this.instalada == false){
                alert("La aplicacion no esta instalada");
            }else{
                alert("La aplicacion ya esta iniciada");
            }
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            alert("La aplicacion se va a cerrar");
            this.iniciada=false;
        }else{
            if (this.instalada == false){
                alert("La aplicacion no esta instalada");
            }
        }
    }
    infoApp(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>`
    }
}
let app1 = new aplicacion("500","2","2Gb");
let app2 = new aplicacion("1500","5","12Gb");
app1.instalar();
app1.iniciar();
app1.cerrar();
app1.desinstalar();
app2.iniciar();
app2.instalar();
app2.desinstalar();
app2.cerrar();
let app3 = new aplicacion("200","4","22Gb");
let app4 = new aplicacion("5600","5","23Gb");
let app5 = new aplicacion("5100","2","24Gb");
let app6 = new aplicacion("4500","3","24Gb");
let app7 = new aplicacion("2500","5","21Gb");
document.write(`
${app1.infoApp()} <br>
${app2.infoApp()} <br>
${app3.infoApp()} <br>
${app4.infoApp()} <br>
${app5.infoApp()} <br>
${app6.infoApp()} <br>
${app7.infoApp()} <br>
`)