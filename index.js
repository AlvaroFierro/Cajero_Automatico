//Regresar el resultado por medio innherText en el div con id="Resultados":
//****Ingreso.- onclick="ingresar()" submit name--id="Ingreso"
//       es decir se ejecutara ingresar() al hacer el click en el botton con id=Ingreso
//****Retirar.- onclick="retirar()" submit name--id="Retiro"
//       es decir se ejecutara ingresar() al hacer el click en el botton con id=Retiro
//  -----------------------------resultados= linea **1**---------------------------------------
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

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