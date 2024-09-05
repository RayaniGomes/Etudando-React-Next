export class ContaCorrente{
    agencia;
    saldo = 0;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log(`Saque realizado. Saldo atual: R$${this.saldo},00`);
        }else{
            console.log(`Você só tem: R$${this.saldo},00, saldo insuficiente para sacar R$${valor},00 `);
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;

            console.log(`Depósito realizado. Saldo atual: R$${this.saldo},00`);
        }
    }
}