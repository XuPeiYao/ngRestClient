"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FunctionParameter = /** @class */ (function () {
    function FunctionParameter() {
    }
    return FunctionParameter;
}());
exports.FunctionParameter = FunctionParameter;
Function.prototype.getParameters = function () {
    try {
        var temp = this.toString().match(/\(.+\)/g)[0];
        temp = temp.substring(1);
        temp = temp.substring(0, temp.length - 1);
        return temp.split(',').map(function (x) { return x.trim(); });
    }
    catch (e) {
        return [];
    }
};
//# sourceMappingURL=functionExtension.js.map