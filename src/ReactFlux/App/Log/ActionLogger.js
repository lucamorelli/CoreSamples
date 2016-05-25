import Dispatcher from "../Dispatcher/Dispatcher";
/**
 * Logger that logs all actions
 */
class ActionLogger {
    constructor() {
        this.processActions = (action) => {
            this.log(action);
        };
        Dispatcher.register(this.processActions);
    }
    log(action) {
        let logEntry = action.toLogEntry();
        if (logEntry != null) {
            console.log(`ActionLogger: ${logEntry.toString()}`);
        }
    }
}
export default new ActionLogger();
//# sourceMappingURL=ActionLogger.js.map