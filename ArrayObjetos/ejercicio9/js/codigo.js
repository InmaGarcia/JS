/*Crear un objeto literal llamado factura con las propiedades:
1. numero, cliente, divisa, subtotal e IVA, dándole valores a cada uno de ellos.
2. Tendrá también un método que calcula el total ( subtotal + iva)
3. Imprimir por consola: La factura X(numero) tiene un importe de Y(subtotal) Z(divisa)
*/
let factura = {
  numero: 1,
  cliente: "Inma",
  divisa: "€",
  subtotal: 12,
  iva: 21,
  total: function (total = 0) {
    let ivaFactura = this.subtotal * (this.iva / 100);
    return this.subtotal + ivaFactura;
  },
};
document.body.innerHTML = `La factura ${
  factura.numero
} tiene un importe de ${factura.total()}${factura.divisa}`;
console.log(
  `La factura ${factura.numero} tiene un importe de ${factura.total()}${
    factura.divisa
  }`
);
