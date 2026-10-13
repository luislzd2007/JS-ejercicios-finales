let vida = 100;
const limiteInferior = 50;
const limiteSuperior = 100;
let pociones = 3;
const curacion = 30;
const daño = 5;

const intervalo = setInterval(() => {
  vida -= daño;
  if (vida < 0) vida = 0;
  console.log("Vida: " + vida + " - Pociones: " + pociones);

  if (vida > 0 && vida < limiteInferior && pociones > 0) {
    vida = Math.min(vida + curacion, limiteSuperior);
    pociones--;
    console.log("Poción usada. Vida: " + vida + " - Pociones restantes: " + pociones);
  }

  if (vida === 0) {
    console.log("El jugador ha muerto.");
    clearInterval(intervalo);
  }
}, 2000);
