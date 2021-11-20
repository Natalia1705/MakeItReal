
// Ejercicio 1
// Estás diseñando un sistema de facturación. Debes representar la lista de facturas,
// donde cada factura está compuesta de un número, el nombre del cliente, la fecha, y unos ítems.
// Cada ítem tiene un id de producto, un precio por unidad y una cantidad.
// ¿Cómo representarías esta lista utilizando arreglos y objetos?

// Lista de facturas
var arrayInvoice = []

//funcion que permite agregar facturas a la lista de facturas
function addInvoice(number,customer,date,items) {
    const invoice = {
        number,
        customer,
        date,
        items: []
    }
}
    addItems();
    //funcion que permite agregar items a la factura
    function addItems (){
        invoice.items = items.map( ({id,price,quantity}) => ({id,price,quantity}))
    //Agregamos facturas al arreglo de facturas
    arrayInvoice.push(invoice)
}

addInvoice(1, "name", '27/10/2021', [{ id: 1, price: 25, quantity: 30 },{id:2, price:20, quantity:30} ] )
console.log(arrayInvoice)
// Ejercicio 2
// Escribir una función crearContador que retorne una nueva función que incremente un número y
// lo retorne cada vez que es invocada:
// const contar = createContador()
// contar() // 1
// contar() // 2
// contar() // 3

function createCount () {
    let count = 0;
    return function increment(){
        count++;
        return count;
    }
}
const counter1 = createCount();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
console.log(counter1()); // 4

// Recuerda de hacer uso de closures para evitar el uso de variables globales.
// const readline = require("readline");

// Ejercicio 3
// Escribir una función createGame que retorne una nueva función que reciba un número y permita 
// adivinar un número secreto del 1 al 100. Si el número es mayor al número secreto la función retorna 
// la cadena “Muy alto!”, si el número es menor retorna la cadena “Muy bajo!”. Si el número es el correcto 
// retorna “Lo adivinaste, felicitaciones!”

// const guess = createGame() // numero secreto: 5
// guess(8) // "Muy alto!"
// guess(4) // "Muy bajo!"
// guess(5) // "Lo adivinaste, felicitaciones!"

// Bonus: crear una aplicación de consola para poder jugar el juego

function createGame(){
    let secret = Math.floor(Math.random() * (100 - 1) + 1);
    return function play(number){
        if( number >= 1 && number <= 100 ){
            if( number > secret ) return "Muy alto!"
            else if( number < secret ) return "Muy bajo!"
            else { winner = true; return "Lo adivinaste, felicitaciones!" }
        }else return "El numero está entre 1 y 100"
    }
}

const game = createGame();
var winner = false
const label = "Ingrese un numero del 1 al 100 "

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function request(){
    if( winner ) rl.close()
    else {
        rl.question(label, function(answer){
            console.log(game(answer))
            request();
        });
    }
}
request();