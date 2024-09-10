export class Negociacao {
    constructor(
    // os construtores tem que ter o mesmo nome da classe, por isso colocamos o private dentro do construtor, simplificando o codigo 
    // com o readonly, o valor de _data, _quantidade e _valor nunca vão ser alterados, isso simplifica o código
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //programação defensiva, ou seja, vai retornar o valor de _data, ou seja, o this._data fazedo uma copia da data que foi passada no construtor
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
