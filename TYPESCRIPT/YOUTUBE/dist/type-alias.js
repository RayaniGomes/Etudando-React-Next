"use strict";
function logDetails(uid, item) {
    console.log("A product with ".concat(uid, " has a title as ").concat(item));
}
function logInfo(uid, user) {
    console.log("An user with ".concat(uid, " has a name as ").concat(user));
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform("Windows");
renderPlatform("Linux");
renderPlatform("MacOS");
logDetails(123, "Sapato");
logDetails("123", "Sapato");
logInfo(123, "João");
logInfo("123", "João");
