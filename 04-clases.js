


class Persona {

    constructor(x,y){
        this.name = x;
        this.lastname=y;
    }



    saludar(){

        return `HOLA ${this.name} ${this.lastname} Como estas?`
    }
}



const daniel = new Persona(); 
daniel.name = "aljemiro"
daniel.lastname = 'Perea'


console.log(daniel.saludar());