class ListaInvitados {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.listaNegra = false;
    }

    prohibido() {
        this.listaNegra = true;
        console.log("Este invitado se encuentra en la lista negra")
    }

    agregarInvitado5() {
        if (i == 5) {
            const invitado5 = new ListaInvitados (ingresarInvitado, edadInvitado)
        };
    }
    agregarInvitado6(){
        if (i== 6) {
            const invitado6 = new ListaInvitados (ingresarInvitado, edadInvitado)
        };
    }
}
const invitado1 = new ListaInvitados("Nahuel","21");
const invitado2 = new ListaInvitados("Joel","20");
const invitado3 = new ListaInvitados("Agustina","22");
const invitado4 = new ListaInvitados("Raquel","19");


for (let i = 5; i < 7; i++) {
    let ingresarInvitado = prompt("Ingresar nombre del invitado:");
 
    if (i == 10){
       alert("La lista de invitados esta completa");
    }
    else if (ingresarInvitado == "Nicolas" || ingresarInvitado == "Lucia") {
       alert ("No se pudo agregar a esta persona, se encuentra en la lista negra.");
       --i;
    }
    else if (ingresarInvitado == "") {
        alert("No ingreso el nombre correctamente, debe ingresarlo otra vez");
        --i;
     } 
     else if (ingresarInvitado == invitado1.nombre || ingresarInvitado == invitado2.nombre || ingresarInvitado == invitado3.nombre || ingresarInvitado == invitado4.nombre) {
         alert ("Ese invitado ya se encuentra en la lista.");
         --i;
     }
     else {
        let edadInvitado = prompt("Ingresar edad: ");
        alert("N° de invitado: "+ i + "\nNombre: "+ ingresarInvitado + "\nEdad: " + edadInvitado);
     }
 }


invitado5.agregarInvitado5();
invitado6.agregarInvitado6();

