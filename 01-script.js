
// CONSTRUCTOR
// es constructor porque su Primera letra es en mayuscula 

class Persona {
    constructor() {

        this.nombre = "",
            this.apellido = "",
            this.edad = "",
            this.fullName = () => `${this.nombre} ${this.apellido}`;


    }
}

const persona1 = new Persona()

persona1.nombre ="Gabriel"
persona1.apellido='Roman'


console.log(persona1.fullName());

