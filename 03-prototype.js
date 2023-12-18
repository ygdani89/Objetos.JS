

// Asignar por parametros los valores del constructor 
function Persona ( nombre , apellido){

    this.name= nombre;
    this.lastname= apellido

}
 


// Como agregarle un metodo nuevo al constructor  
// en otras palabras extender la estructura del constructor 
Persona.prototype.greet = function(){

    return `Hola soy ${this.name} ${this.lastname}`
}




const javier = new Persona('gabriel','Hernesto')
console.log(javier.greet());