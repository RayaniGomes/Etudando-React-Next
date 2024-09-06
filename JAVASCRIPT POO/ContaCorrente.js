export class ContaCorrente{
    agencia;
    cliente; 
    saldo = 0;

    set Cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.cliente = novoValor;
        }
    }

    get Cliente(){
        return this.cliente;
    }

    get Saldo(){
        return this.saldo;
    }
    
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return console.log(`Saque: R$${valor} \nSaldo atual: R$${this.saldo},00`);
        }else{
            console.log(`Você tem: R$${this.saldo},00 \nSaldo insuficiente para sacar R$${valor},00 `);
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            return console.log(`Deposito: R$${valor} \nSaldo atual: R$${this.saldo},00`);
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

        if (valorSacado != 0) {
            console.log(`Transferência realizada para ${conta.cliente.nome}: R$${valor}`);
        }else{
            console.log('Nenhuma transferência realizada!');
        }
    }
}