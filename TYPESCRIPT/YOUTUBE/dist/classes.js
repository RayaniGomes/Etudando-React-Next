"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player ".concat(this.name, " is ").concat(this.age, " years old."));
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, lavel) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = lavel;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        // get e set são acessos
        get: function () {
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    return CharAccount;
}(UserAccount));
var user = new UserAccount("João", 30);
console.log(user);
user.logDetails();
var maria = new CharAccount("Maria", 25, "MariaSilva", 100);
console.log(maria);
maria.logDetails();
maria.setLevel = 700;
console.log(maria.getLevel);
