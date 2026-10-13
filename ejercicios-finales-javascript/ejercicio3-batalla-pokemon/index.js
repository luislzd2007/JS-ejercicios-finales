const pikachu = {
  nombre: "Pikachu",
  tipo: "Eléctrico",
  ataque: "Impacto",
  daño: 20,
  vida: 50,
  defensa: 10
};

const charmander = {
  nombre: "Charmander",
  tipo: "Fuego",
  ataque: "Ascuas",
  daño: 18,
  vida: 55,
  defensa: 8
};

function calcularDaño(atacante, defensor) {
  return Math.max(atacante.daño - defensor.defensa, 0);
}

function atacar(atacante, defensor) {
  const dañoReal = calcularDaño(atacante, defensor);
  defensor.vida = Math.max(defensor.vida - dañoReal, 0);
  console.log(
    atacante.nombre + " usa " + atacante.ataque + " y hace " + dañoReal + " de daño. " +
      "A " + defensor.nombre + " le quedan " + defensor.vida + " de vida."
  );
}

console.log(pikachu.nombre + " VS " + charmander.nombre + "\n");

let turno = 1;
let turnoDePikachu = true;

const batalla = setInterval(() => {
  let atacante;
  let defensor;

  if (turnoDePikachu) {
    console.log("Turno " + turno);
    atacante = pikachu;
    defensor = charmander;
  } else {
    atacante = charmander;
    defensor = pikachu;
  }

  atacar(atacante, defensor);

  if (defensor.vida === 0) {
    console.log("\n" + atacante.nombre + " gana la batalla");
    clearInterval(batalla);
    return;
  }

  if (!turnoDePikachu) {
    turno++;
  }
  turnoDePikachu = !turnoDePikachu;
}, 1500);