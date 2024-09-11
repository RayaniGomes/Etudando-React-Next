"use strict";
// boolean (true ou false)
var isDone = false;
// string (texto '', "", ``)
var nome = "João";
// number (int, float, hex, binary, octal)
var age = 20;
// array
var list = [1, 2, 3];
var list3 = ["a", "b", "c"];
// tuple
var x;
x = ["hello", 10]; // ok
// x = [10, "hello"]; // error
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO RECOMENDADO USAR
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// void (vazio)
function warnUser() {
    console.log("This is my warning message");
}
// null e undefined (nulo e indefinido)
var u = undefined; // não é recomendado
var n = null; // não é recomendado
// never (nunca)
function error(message) {
    throw new Error(message);
}
// object
var obj = {};
obj = [];
// type inference (ele consegue inferir o tipo sem precisar colocar a palavra-chave 'type')
var message = "abc";
message = "hello";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
