import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente('Ricardo', 11122233309);
const cliente2 = new Cliente('Alice', 22233311108);

const conta1 = new ContaCorrente(1001, cliente1);

const conta2 = new ContaCorrente(102, cliente2);

conta1.depositar(500);

let valor = 200;

conta1.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas)
//console.log(conta2.numeroDeContas)