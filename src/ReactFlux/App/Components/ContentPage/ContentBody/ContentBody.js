import * as React from "react";
import BaseComponent from "./../../BaseComponent";
/* tslint:disable:no-any */
const styles = require("./ContentBody.module.less");
;
export default class ContentBody extends BaseComponent {
    doRender() {
        return React.createElement("div", {className: styles.container}, 
            React.createElement("div", {className: styles.title}, this.props.title), 
            React.createElement("span", {className: styles.summaryTitle}, "Summary:"), 
            React.createElement("div", {ref: "summaryRef", className: styles.summary}, this.props.summary), 
            this.props.children);
    }
}
;
//# sourceMappingURL=ContentBody.js.map