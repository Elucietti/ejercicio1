let ingresoCantidadProductos: number = Number(
  prompt("Ingrese Cantidad productos a llevar")
); //longitud
let producto: string[] = new Array(ingresoCantidadProductos);
let compra: number[] = new Array(ingresoCantidadProductos);
function detalle(arregloDetalle: string[]): void {
  for (let i: number = 0; i < arregloDetalle.length; i++) {
    producto = prompt(
      "Ingrese productos en el carrito " + ingresoCantidadProductos
    );
    arregloDetalle[i] = producto;
  }
}

function ObtenerPrecios(arregloPrecios: number[]): void {
  for (let i: number = 0; i < arregloPrecios.length; i++) {
    let precios: number = Number(
      prompt("ingrese precio unitario " + ingresoCantidadProductos)
    );
    arregloPrecios[i] = precios;
  }
}

detalle(producto);
ObtenerPrecios(compra);
