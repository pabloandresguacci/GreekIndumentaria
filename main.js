class Cliente {
    constructor(sexo, prenda, precio) {
        this.sexo = sexo;
        this.prenda = prenda;
        this.precio = precio;
        
        
    }
}
let masculinoFemenino = [
    { sexo: 'hombre', prenda: 'malla', precio: "2000" },
    { sexo: 'hombre', prenda: 'remera', precio: "2200" },
    { sexo: 'hombre', prenda: 'short', precio: "2300" },
    { sexo: 'mujer', prenda: 'blusa', precio: "2400" },
    { sexo: 'mujer', prenda: 'polera', precio: "2500" },
    { sexo: 'mujer', prenda: 'calza', precio: "2500" },

];
alert(
    " Sexo:Hombre Prenda:malla Precio: 2000 \n Sexo:Hombre Prenda:remera Precio: 2200 \n Sexo:Hombre Prenda:short Precio: 2300 \n Sexo:Mujer Prenda:blusa Precio: 2400 \n Sexo:Mujer Prenda:polera Precio: 2500 \n Sexo:Mujer Prenda:calza Precio: 2300"
    

)
function definirProducto(arrayProductos) {
    
    let sexo = prompt("ingrese su sexo: hombre o mujer");
    let prenda = prompt("elija una prenda?");
    let precio = parseInt(prompt("ingrese el precio"));
    
    
    const nuevoCliente = new Cliente(sexo, precio, prenda);
    
    arrayProductos.push(nuevoCliente);
    console.log("producto añadido al carrito");
  }

  function mostrarProductos() {
    arrayProductos.forEach((producto) => {
      alert(
        `usted eligio la prenda ${producto.precio} por un precio de ${producto.prenda} del sexo ${producto.sexo}`
      );
    });
  }
  function finalizarCompra() {
    const total = arrayProductos.reduce((acc, el) => acc + el.precio, 0);
  
    alert(`gracias por su compra!! el total a pagar es de $ ${total}`);
  }

  let arrayProductos = [];


let opcion = prompt(
  "ingrese una opcion: \n 1: elegir una prenda   \n 3: finalizar compra  \n 4: salir"
);


while (opcion !== "4") {
  if (opcion === "1") {
    definirProducto(arrayProductos);
  }
  if (opcion === "2") {
    mostrarProductos(arrayProductos);
  }
  if (opcion === "3") {
    finalizarCompra(arrayProductos);
  }
 
 
  opcion = prompt(
    "vuelva a ingresar una opcion: \n 1: seguir comprando \n 2: mostrar carrito \n 3: finalizar compra  \n 4: salir"
  );
}

alert("muchas gracias, vuelva pronto!!!");
