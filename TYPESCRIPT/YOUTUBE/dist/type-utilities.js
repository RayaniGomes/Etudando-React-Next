"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: "Asistir aula",
    description: "Aprender typescript",
    completed: false,
};
console.log(todo);
//partial
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var Todo2 = updateTodo(todo, { completed: true });
console.log(Todo2);
var Todo3 = {
    title: "Asistir aula",
    completed: false,
};
var Todo4 = {
    title: "Asistir aula",
    completed: false,
};
