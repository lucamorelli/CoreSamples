"use strict";
class CalculatorStore {
    constructor() {
        this.clear();
    }
    input(digit) {
        this.operand = (this.operand * 10) + digit;
    }
    add() {
        this.total = this.total + this.operand;
        this.operand = 0.0;
    }
    clear() {
        this.total = 0.0;
        this.operand = 0.0;
    }
}
exports.CalculatorStore = CalculatorStore;
//# sourceMappingURL=calculator-store.js.map