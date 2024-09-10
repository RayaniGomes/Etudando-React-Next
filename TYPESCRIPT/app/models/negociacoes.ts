import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; //isso é a mesma coisa de Array<Negociacao>

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] { // retorna somente leitura, ele não pode ser alterado e seria a mesma coisa que usar ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}
