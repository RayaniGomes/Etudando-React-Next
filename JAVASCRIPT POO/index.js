import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "João";
cliente1.cpf = 11111111111;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.saldo = 100;
contaCorrente1.agencia = 1111;

contaCorrente1.depositar(100);
contaCorrente1.sacar(50);

console.log(contaCorrente1);

//parei no modulo 3