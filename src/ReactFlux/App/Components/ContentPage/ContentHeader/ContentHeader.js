import * as React from "react";
import BaseComponent from "./../../BaseComponent";
/* tslint:disable:no-any */
const styles = require("./ContentHeader.module.less");
;
export default class ContentHeader extends BaseComponent {
    doRender() {
        if (!this.props.isActive) {
            return null;
        }
        return React.createElement("div", {className: styles.container}, this.props.title);
    }
}
;
//# sourceMappingURL=ContentHeader.js.map