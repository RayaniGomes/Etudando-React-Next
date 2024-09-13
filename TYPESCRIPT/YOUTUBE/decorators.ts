// // factory
// function Logger(prefix: string) {
//     return (target) => {
//         console.log(`${prefix} - ${target}`);
//     };
// };
// @Logger("awesome")
// class Foo {}

// // class decorator
// function setApiVersion(apiVersion: string) {
//     return (constructor) => {
//         return class extends constructor {
//             version = apiVersion;
//         };
//     };
// };
// // decorator - anotar a versão da API
// @setApiVersion("2.0.0")
// class API {}
// console.log(new API());

//property decorator
// function minLength(length: number) {
//     return (target: any, key: string) => {
//         let val = target[key];
//         const getter = () => val;
//         const setter = (value: string) => {
//             if (value.length < length) {
//                 console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}.`);
//             } else {
//                 val = value;
//             }
//         };
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter
//         });
//     }
// }
// class Movie {
//     //validação - se form menor que 5 caracteres, retorna erro
//     @minLength(5)
//     title: string;
    
//     constructor(t: string) {
//         this.title = t;
//     }
// }
// const movie = new Movie("Interstellar");
// console.log(movie.title);

//method decorator
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = g;
    }
    greet() {
       console.log(`Hello, ${this.greeting}`); 
    }
}

class Person = new Greeter("Person!!")
Person.greet();

//parameter decorator

