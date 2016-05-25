import BaseStore from "./BaseStore";
import Dispatcher from "../Dispatcher/Dispatcher";
import AppLoadedAction from "../Actions/AppLoadedAction";
import SayHelloAction from "../Actions/SayHelloAction";
class CommonStore extends BaseStore {
    constructor() {
        super();
        this.sayHelloCount = 0;
        Dispatcher.register((action) => this.processActions(action));
    }
    getBodyTitle() {
        if (this.bodyTitle) {
            return this.bodyTitle.toUpperCase();
        }
        return "";
    }
    ;
    getBodySummary() {
        return this.bodySummary;
    }
    ;
    getSayHelloCount() {
        return this.sayHelloCount;
    }
    ;
    processActions(action) {
        if (action instanceof AppLoadedAction) {
            this.bodyTitle = action.bodyTitle;
            this.bodySummary = action.bodySummary;
            this.emitChange();
        }
        else if (action instanceof SayHelloAction) {
            this.sayHelloCount++;
            this.emitChange();
        }
    }
    ;
}
export default new CommonStore();
//# sourceMappingURL=CommonStore.js.map