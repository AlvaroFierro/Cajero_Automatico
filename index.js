//Regresar el resultado por medio innherText en el div con id="Resultados":
//****Ingreso.- onclick="ingresar()" submit name--id="Ingreso"
//       es decir se ejecutara ingresar() al hacer el click en el botton con id=Ingreso
//****Retirar.- onclick="retirar()" submit name--id="Retiro"
//       es decir se ejecutara ingresar() al hacer el click en el botton con id=Retiro
//  -----------------------------resultados= linea **1**---------------------------------------
//Pop up stuff;
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

openEls.forEach(element => {
    console.log(element);
});

for (const el of openEls) {
    el.addEventListener("click", function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}

for (const el of closeEls) {
    el.addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

document.addEventListener("keyup", e => {
    // if we press the ESC
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});
//Cuentas preEchas
var cuentas = [
    { nombre: "Mali@hotmail.com", contraseña: 111, saldo: 200 },
    { nombre: "Gera@hotmail.com", contraseña: 111, saldo: 290 },
    { nombre: "Maui@hotmail.com", contraseña: 111, saldo: 67 }
];

var x = ["", 0];

function ingresar(event) {
    //esto es para que no se reinicio tu submit
    event.preventDefault();
    //Code here: Alvaro Fierro
    //Se te dara un array con nombre x donde contenga [nombre=string,saldo=Number];
    //Como hacerlo?= estan las indicaciones en la linea **2**

}

function retirar(event) {
    //esto es para que no se reinicio tu submit
    event.preventDefault();
    //Code here Luis moreno
    //Se te dara un array con nombre x donde contenga [nombre=string,saldo=Number];
    //el resultado estan las indicaciones en la linea **4**

}
//get user pasword
var pasa = false,
    item = -1;

function getInfo() {
    let findPerson = infoArray();
    findPerson[0] != "" ? document.getElementById("Login").href = "In.html" : ErrorIntentarDN();
}

function ErrorIntentarDN() {
    document.getElementById("Name").value = "";
    document.getElementById("Pas").value = "";
}

function infoArray() {
    let input = document.getElementById("Name").value;
    let inputContraseña = document.getElementById("Pas").value;
    cuentas.forEach(((e, i) => {
        e.nombre == input ? item = i : 0;
    }));
    if (item != -1) {
        cuentas[item].contraseña == inputContraseña ? pasa = true : pasa = false;
        if (pasa) {
            return [cuentas[item].nombre, cuentas[item].saldo];
        } else {
            return x;
        }
    } else {
        return x;
    }
}