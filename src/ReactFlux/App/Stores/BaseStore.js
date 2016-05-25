class BaseStore {
    constructor() {
        this.listeners = null;
        this.listeners = [];
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    removeListener(listener) {
        var index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
        else {
            // We should never be trying to remove a listener we have not registered
            console.error("BaseStore: Trying to remove a listener that was never added. This indicates a bug in a component.");
        }
    }
    emitChange() {
        for (var i = 0; i < this.listeners.length; i++) {
            this.listeners[i]();
        }
    }
}
export default BaseStore;
//# sourceMappingURL=BaseStore.js.map