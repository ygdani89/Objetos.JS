

const Empresa = {

    empleados: [],
    nombreEmpresa: "Crazy Monkeys"


};


class usuario {

    constructor(x, y) {
        this.name = x;
        this.apellido = y
    }
    saludar() {
        return `hola ${this.name} ${this.apellido}`
    }


}


const empleado1 = new usuario('Daniel', 'Perea');
const empleado2 = new usuario("Juan David, 'Rodriguez");


// Utilizaremos el "PUSH" para agregarlos al empleados al objeto Empresa 

Empresa.empleados.push(empleado1)


console.log(Empresa);