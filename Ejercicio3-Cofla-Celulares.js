class celulares{
    constructor(color, peso, resolucion, camara, ram){
        this.color= color;
        this.peso= peso;
        this.resolucion= resolucion;
        this.camara= camara;
        this.ram= ram;
        this.encendido= false;
    }
    botonEncendido(){
        if (this.encendido == false){
            alert("El telefono se va a encender")
            this.encendido= true;
        }else{
            alert("El telefono se va a apagar")
            this.encendido= false;
        }
    }
    reiniciar(){
        if (this.encendido==true){
        alert("El telefono se reiniciará")
        }else{
            alert("El telefono está apagado")
        }
    }
    tomarFoto(){
        alert(`Se ha tomado una foto cun una resolucion de ${this.camara}`);
    }
    grabarVideo(){
        alert(`Se ha grabado video con una resolucion de ${this.camara}`);
    }
    verInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion: <b>${this.resolucion}</b><br>
        Camara: <b>${this.camara}</b><br>
        Ram: <b>${this.ram}</b><br>
        `
    }
}
class celularAltaGama extends celulares{
    constructor(color, peso, resolucion, camara, ram,camaraExtra){
        super(color,peso,resolucion,camara,ram);
        this.camaraExtra= camaraExtra;
    }
    grabarCamaraLenta(){
        alert("Grabando en camara lenta");
    }
    reconocimientofacial(){
        alert("Se realiza un reconocimiento facial");
    }
    infoAltagama(){
        return `${this.verInfo()} Resolucion camara extra: ${this.camaraExtra}` 
    }
}
let celular1= new celulares("rojo","50gm","hd","40px","16GB")
let celular2= new celulares("verde","20gm","hd","50px","8GB")
let celular3= new celulares("amarillo","150gm","hd","20px","18GB")
document.write(celular1.verInfo());
document.write(celular2.verInfo());
document.write(celular3.verInfo());
let celular4 = new celularAltaGama("rojo","50gm","hd","40px","16GB","Full HD");
let celular5 = new celularAltaGama("rojo","50gm","hd","40px","16GB","HD");
document.write(`
    ${celular4.infoAltagama()}<br>
    ${celular5.infoAltagama()}<br>`)
celular1.botonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.botonEncendido();



