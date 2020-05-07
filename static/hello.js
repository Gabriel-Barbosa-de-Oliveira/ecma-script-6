(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var print = exports.print = function print() {
    return console.log((arguments.length <= 0 ? undefined : arguments[0]) + ": " + (arguments.length <= 1 ? undefined : arguments[1]));
};
var options = exports.options = {
    _intro: "You Can Type",
    _options: ["left", "right", "up", "down", "help"],
    outputOptions: function outputOptions() {
        var _this = this;

        this._options.forEach(function (f) {
            return addToOutput(_this._intro + " " + f);
        });
    }
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bear = exports.Bear = function () {
    function Bear() {
        _classCallCheck(this, Bear);
    }

    _createClass(Bear, [{
        key: "whenEncounter",
        value: function whenEncounter() {
            return "grr grow, you encountered a bear";
        }
    }]);

    return Bear;
}();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Environment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encounter = require("./encounter.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = exports.Environment = function () {
    function Environment(name) {
        _classCallCheck(this, Environment);

        this.name = name;
        this.encounter = new _encounter.Bear();
    }

    _createClass(Environment, [{
        key: "stumbleUpon",
        value: function stumbleUpon() {
            var interaction = this.name + "You Just Stumbled Upon ...." + this.encounter.whenEncounter();
            return interaction;
        }
    }]);

    return Environment;
}();

},{"./encounter.js":2}],4:[function(require,module,exports){
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

},{"./additions.js":1,"./environment.js":3}]},{},[4]);
