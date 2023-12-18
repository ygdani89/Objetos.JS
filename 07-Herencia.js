// Palabras claves Extends  y super();

class usuario {

    constructor(x, y) {

        this.name = x;
        this.apellido = y;
    }
}

// la Class Programador quiere heredar propiedades del constructor de usuario  como nombre y apellido entonces utilizamos extends y super();
//cuando cree un programador le puedo setear nombre y apellido osea que no hay necesidad de  ponerle las propiedades this.name y this.apellido en el constructor de Programador.

class Programador extends usuario {

    constructor( lenguaje){
        super();
        this.lenguaje = lenguaje
    }
}


const usuario1 = new usuario('alex','Andrei')
const Programador1 = new Programador('Java Script') 
Programador1.name = "daniel"




console.log(Programador1);