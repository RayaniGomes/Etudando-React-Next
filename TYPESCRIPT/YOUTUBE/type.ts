// boolean (true ou false)
let isDone: boolean = false;

// string (texto '', "", ``)
let nome: string = "João";

// number (int, float, hex, binary, octal)
let age: number = 20;

// array
let list: number[] = [1, 2, 3];
let list3: Array<string> = ["a", "b", "c"];

// tuple
let x: [string, number];
x = ["hello", 10]; // ok
// x = [10, "hello"]; // error

// enum
enum Colors { 
    white = "#fff", 
    black = "#000" 
}

// any (qualquer coisa) NÃO RECOMENDADO USAR
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// void (vazio)
function warnUser(): void {
    console.log("This is my warning message");
}

// null e undefined (nulo e indefinido)
let u: undefined = undefined; // não é recomendado
let n: null = null; // não é recomendado
type bla = string | null | undefined;

// never (nunca)
function error(message: string): never {
    throw new Error(message);
}

// object
let obj: object = {};
obj = [];

// type inference (ele consegue inferir o tipo sem precisar colocar a palavra-chave 'type')
let message = "abc";
message = "hello";

window.addEventListener("click", (e) => {
    console.log(e.target);
});