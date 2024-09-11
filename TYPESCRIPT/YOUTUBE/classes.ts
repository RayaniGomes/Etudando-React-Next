class UserAccount {
    public name: string; // por todo o projeto
    protected age: number; // so pode ser acessado dentro da classe e subclasses

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}

class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, lavel: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = lavel;
    }

    // get e set são acessos
    get getLevel() { // é como uma função, ou seja, uma propriedade que retorna o valor chamado dentro dela
        return this.level;     
    }

    set setLevel(level: number) {
        this.level = level;
    }
}

const user = new UserAccount("João", 30);
console.log(user);
user.logDetails();

const maria = new CharAccount("Maria", 25, "MariaSilva", 100);
console.log(maria);
maria.logDetails();
maria.setLevel = 700;
console.log(maria.getLevel);