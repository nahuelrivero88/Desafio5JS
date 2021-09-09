class ListaInvitados {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  registro() {
    console.log(
      `Agregaste a ${this.nombre} de ${this.edad} años a tu lista de invitados`
    );
  }
}

const invitado1 = new ListaInvitados("Nahuel", "21");
const invitado2 = new ListaInvitados("Joel", "20");
const invitado3 = new ListaInvitados("Agustina", "22");
const invitado4 = new ListaInvitados("Raquel", "19");

for (let i = 5; i < 7; i++) {
  let nombre = prompt("Ingresar nombre del invitado:");
  let edad = parseInt(prompt("Ingresar edad: "));
  if (i == 10) {
    alert("La lista de invitados esta completa");
  } else if (nombre == "Nicolas" || nombre == "Lucia") {
    alert("No se pudo agregar a esta persona, se encuentra en la lista negra.");
    --i;
  } else if (nombre == "") {
    alert("No ingreso el nombre correctamente, debe ingresarlo otra vez");
    --i;
  } else if (
    (nombre == invitado1.nombre && edad == invitado1.edad) ||
    (nombre == invitado2.nombre && edad == invitado2.edad) ||
    (nombre == invitado3.nombre && edad == invitado3.edad) ||
    (nombre == invitado4.nombre && edad == invitado4.edad)
  ) {
    alert("Ese invitado ya se encuentra en la lista.");
    --i;
  } else if (edad < 18) {
    alert("Es un evento +18, no puede ingresar ese invitado");
    --i;
  } else if (i == 5) {
    const invitado5 = new ListaInvitados(nombre, edad);
    invitado5.registro();
  } else if (i == 6) {
    const invitado6 = new ListaInvitados(nombre, edad);
    invitado6.registro();
  }
}
