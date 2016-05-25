export default class ActionLogEntry {
    constructor(name, logProperties) {
        this.name = name;
        this.logProperties = logProperties;
    }
    toString() {
        return `${this.name} | ${JSON.stringify(this.logProperties)}`;
    }
}
//# sourceMappingURL=ActionLogEntry.js.map