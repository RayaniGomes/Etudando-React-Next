import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    // vai adicionar uma negociação a lista de negociações (no console do navegador)
    adiciona(): void { 
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limpaFormulario();
    }

    // vai criar uma nova negociação pehgando as infoemções do formulário
    criaNegociacao(): Negociacao { 
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    // vai limopar o formulário para ser atruisdo novos valores
    limpaFormulario(): void { 
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}