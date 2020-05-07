import { Bear } from "./encounter.js";

export class Environment {
    constructor(name) {
        this.name = name;
        this.encounter = new Bear();
    }

    stumbleUpon() {
        var interaction = this.name + "You Just Stumbled Upon ...." + this.encounter.whenEncounter();
        return interaction;
    }
}
