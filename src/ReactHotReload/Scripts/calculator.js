"use strict";
const React = require('react');
const calculator_store_1 = require("./calculator-store");
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.calculatorStore = new calculator_store_1.CalculatorStore();
    }
    input(digit) {
        this.calculatorStore.input(digit);
        this.forceUpdate();
    }
    clear() {
        this.calculatorStore.clear();
        this.forceUpdate();
    }
    add() {
        this.calculatorStore.add();
        this.forceUpdate();
    }
    inputButton(digit) {
        return React.createElement("button", {className: "adder-button adder-button-digit", key: digit, onClick: () => this.input(digit)}, digit);
    }
    render() {
        // build the rows of digits
        let buttons = [
            // UNCOMMENT ME! 
            [1, 2, 3].map((digit) => this.inputButton(digit)),
            [4, 5, 6].map((digit) => this.inputButton(digit)),
            [7, 8, 9].map((digit) => this.inputButton(digit))
        ];
        // add the bottom row
        buttons.push([
            React.createElement("button", {className: "adder-button adder-button-clear", key: "clear", onClick: () => this.clear()}, "c"),
            this.inputButton(0),
            React.createElement("button", {className: "adder-button adder-button-add", key: "add", onClick: () => this.add()}, "+")
        ]);
        // wrap with row divs
        let buttonrows = buttons.map((row, idx) => {
            return (React.createElement("div", {key: "row" + idx, className: "adder-row"}, row));
        });
        return (React.createElement("div", {className: "adder-container"}, React.createElement("div", {className: "adder-row"}, React.createElement("span", {className: "adder-operand adder-display"}, this.calculatorStore.operand)), React.createElement("div", {className: "adder-row"}, React.createElement("span", {className: "adder-total adder-display"}, this.calculatorStore.total)), buttonrows));
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map