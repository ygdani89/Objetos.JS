class usuario {

    constructor(x, y) {

        this.name = x;
        this.apellido = y
    }

    saludar(){
        return `hola ${this.name} ${this.apellido}`
    }


}



// La asociacion es vincular dos objetos mediante metodos "PARENT"

const daniel = new usuario("daniel","Perea");
const maria = new usuario('Maria','Mosquera');


maria.parent = daniel; // maria contendra el objeto daniel dentro  


console.log(maria);