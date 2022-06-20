function obtenerDetalle(arregloDetalle: string[]): void {
  for (let i: number = 0; i < arregloDetalle.length; i++) {
    let productos = prompt("Ingrese productos en el carrito ");
    arregloDetalle[i] = productos;
  }
  console.log("detalle:  " + arregloDetalle);
}

function ObtenerPrecios(arregloPrecios: number[]): void {
  for (let i: number = 0; i < arregloPrecios.length; i++) {
    let precios: number = Number(
      prompt("ingrese precio unitario " + producto[i])
    );
    arregloPrecios[i] = precios;
  }
  console.log("precio unitario de: " + arregloPrecios);
}

function obtenerCantidad(arregloCantidad: number[]): void {
  for (let i: number = 0; i < arregloCantidad.length; i++) {
    let cantidad: number = Number(
      prompt("ingrese cantidad de cada producto " + producto[i])
    );
    arregloCantidad[i] = cantidad;
  }
  console.log("cantidad de productos: " + arregloCantidad);
}
function obtenerTotal(arregloPrecio: number[], arregloCant: number[]): number {
  let total: number = 0;
  for (let i: number = 0; i < arregloPrecio.length; i++) {
    total = total + Number(arregloPrecio[i]) * Number(arregloCant[i]);
  }
  return total;
}

let ingresoCantidadProductos: number = Number(
  prompt("Ingrese Cantidad productos a llevar")
); //longitud
let producto: string[] = new Array(ingresoCantidadProductos);
let precio: number[] = new Array(ingresoCantidadProductos);
let cantidadProductos: number[] = new Array(ingresoCantidadProductos);
let precioTotal: number = 0;

obtenerDetalle(producto);
obtenerCantidad(cantidadProductos);
ObtenerPrecios(precio);
precioTotal = obtenerTotal(precio, cantidadProductos);
console.log("precio total: " + precioTotal);

if (precioTotal < 1000) {
  console.log("no participa del sorteo ");
} else if (precioTotal > 1000 && precioTotal < 2000) {
  console.log("participa por un TV");
} else if (precioTotal > 2000 && precioTotal < 3000) {
  console.log("participa por una moto OKM");
} else if (precioTotal > 3000) {
  console.log("participa por un OKM");
}
