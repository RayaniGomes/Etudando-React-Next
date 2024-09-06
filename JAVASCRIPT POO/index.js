import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "João";
cliente1.cpf = 11111111111;

// const cliente2 = new Cliente();
// cliente2.nome = "Maria";
// cliente2.cpf = 22222222222;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.cliente = cliente1;
contaCorrente1.agencia = 1111;
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrente();
contaCorrente2.cliente = new Cliente();
contaCorrente2.cliente.nome = "Luiza";
contaCorrente2.cliente.cpf = 33333333333;
contaCorrente2.agencia = 2222;
 
contaCorrente1.transferir(200, contaCorrente2);


console.log(contaCorrente2.saldo);

