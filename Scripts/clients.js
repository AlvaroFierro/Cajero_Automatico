class Clients {
  constructor(titular, contraseña, saldo) {
    this.titular = titular;
    this.contraseña = contraseña;
    this.saldo = saldo;
    this.activo = false;
  }
  nombreTitular() {
    return this.titular;
  }
  saldo() {
    return this.saldo;
  }
  titularActivo() {
    return this.activo;
  }
  depositarDinero(deposito) {
    this.saldo = this.saldo + deposito;
    return this.saldo;
  }
  retirarDinero(retiro) {
    this.saldo = this.saldo - retiro;
    return this.saldo;
  }
}

const Angel = new Clients("Angel", "Angel123", "550");
const Luis = new Clients("Luis", "Luis213", "450");
const Alvaro = new Clients("Alvaro", "Alvaro312", "350");
