import * as React from "react";
/**
 * Base component which wraps render function in a try catch structure
 * Any child components who extends from this component will get protection when
 * Exception thrown, so protect component life cycle.
 */
class BaseComponent extends React.Component {
    render() {
        let result;
        try {
            result = this.doRender();
        }
        catch (error) {
            this.logError(error);
            result = null;
        }
        return result;
    }
    /**
     * API to log exception
     */
    logError(error) {
        /* tslint:disable */
        const componentName = this._reactInternalInstance._currentElement.type.name;
        const componentDetail = this._reactInternalInstance._currentElement.type.toString();
        let propsString = "";
        for (let propName in this.props) {
            propsString += " " + propName;
        }
        /* tslint:enable */
        console.error(error, { Component: componentName, ComponentDetail: componentDetail, PropList: propsString });
        console.error("A component (" + componentName + ") had an error during render. " +
            "Please fix this immediately, even if you don't own this component. " +
            "This message is designed to be annoying so that the problem is addressed.");
    }
}
;
export default BaseComponent;
//# sourceMappingURL=BaseComponent.js.map