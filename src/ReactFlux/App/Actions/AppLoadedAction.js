import ActionLogEntry from "../Log/ActionLogEntry";
export default class AppLoadedAction {
    constructor(bodyTitle, bodySummary) {
        this.bodyTitle = bodyTitle;
        this.bodySummary = bodySummary;
    }
    toLogEntry() {
        return new ActionLogEntry("AppLoadedAction", {
            "bodyTitle": this.bodyTitle
        });
    }
}
//# sourceMappingURL=AppLoadedAction.js.map