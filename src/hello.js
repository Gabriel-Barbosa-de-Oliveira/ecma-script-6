import { Environment } from "./environment.js";
import { options, print} from "./additions.js";

const defaultLine = "Start Your Journey Now !!!";
const BR = '<br />';

var environment = new Environment("Forest -");

function main() {
    var enterEl = document.querySelector('#enter');
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();
}

function addToOutput(newLine = defaultLine) {
    var output = document.querySelector('#output');
    output.innerHTML = output.innerHTML + BR + newLine;
}

function onClickEnter() {
    var commands = document.querySelector("#commands");
    if (commands.value === "help") {
        options.outputOptions();
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

print("log", "hello");