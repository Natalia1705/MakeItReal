// EJERCICIO 1

function Persona (nombre, peso, altura){
    this.nombre = nombre
    this.peso = peso
    this.altura = altura
    this.saludar = (nomb) => `Hola ${nomb} me llamo ${this.nombre}`
    this.bmi = () => this.peso/this.altura**2

    } 

const pedro = new Persona("Pedro", 72, 1.5);
console.log(pedro);
console.log(pedro.saludar("Maria"))
console.log(pedro.bmi()); 

//EJERCICIO 2

function Auto(){
    this.velocidad = 0 
    this.acelerar = (num) => this.velocidad += num 
    this.frenar = (num) =>  (this.velocidad - num < 0) ? (this.velocidad = 0) : (this.velocidad -= num)
 }

 const a1 = new Auto();
console.log(a1.velocidad); // 0

a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad); // 3

a1.frenar(2);
console.log(a1.velocidad); // 2

a1.frenar(3);
console.log(a1.velocidad);


// EJERCICIO 3

      String.prototype.Palindrome = function() {
            var normalized = this.toLowerCase().match(/[a-z]/gi).reverse();
            return normalized.join('') === normalized.reverse().join('');
          
      };
  
  
  console.log("anita lava la tina".Palindrome())


//   EJERCICIO 4

/*El método Object.create() crea un objeto nuevo, a partir de otro.  
El objeto existente queda como el prototipo del nuevo objeto creado.

Ser relaciona con el tema de prototipo, visto en clase y 
comoestán relacionados las clases 