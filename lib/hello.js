"use strict";

var _environment = require("./environment.js");

var _additions = require("./additions.js");

var defaultLine = "Start Your Journey Now !!!";
var BR = '<br />';

var environment = new _environment.Environment("Forest -");

function main() {
    var enterEl = document.querySelector('#enter');
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();
}

function addToOutput() {
    var newLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLine;

    var output = document.querySelector('#output');
    output.innerHTML = output.innerHTML + BR + newLine;
}

function onClickEnter() {
    var commands = document.querySelector("#commands");
    if (commands.value === "help") {
        _additions.options.outputOptions();
    } else if (commands.value === "left") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value === "right") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value === "up") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value === "down") {
        addToOutput(environment.stumbleUpon());
    } else {
        addToOutput(commands.value);
    }
}

main();

(0, _additions.print)("log", "hello");
//# sourceMappingURL=hello.js.map