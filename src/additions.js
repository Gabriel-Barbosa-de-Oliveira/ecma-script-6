export const print = (...args) => console.log(args[0] + ": " + args[1]);
export var options = {
    _intro: "You Can Type",
    _options: ["left", "right", "up", "down", "help"],
    outputOptions() {
        this._options.forEach(f => addToOutput(this._intro + " " + f));
    }
}