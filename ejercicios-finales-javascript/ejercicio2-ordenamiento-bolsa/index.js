const bolsa = [
  { nombre: "Pokeball", cantidad: 5, tipo: "Normal" },
  { nombre: "Repel", cantidad: 3, tipo: "Normal" },
  { nombre: "Quick Attack", cantidad: 2, tipo: "TM" },
  { nombre: "Surf", cantidad: 3, tipo: "TM" },
  { nombre: "Soda Pop", cantidad: 10, tipo: "Consumable" }
];

function organizarBolsa(items) {
  const normales = items.filter((item) => item.tipo === "Normal");
  const tms = items.filter((item) => item.tipo === "TM");
  const consumibles = items.filter((item) => item.tipo === "Consumable");

  const porCantidad = (a, b) => b.cantidad - a.cantidad;
  normales.sort(porCantidad);
  tms.sort(porCantidad);
  consumibles.sort(porCantidad);

  return { normales, tms, consumibles };
}

const { normales, tms, consumibles } = organizarBolsa(bolsa);

console.log("Normal:");
console.table(normales);
console.log("TM:");
console.table(tms);
console.log("Consumable:");
console.table(consumibles);
