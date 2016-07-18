import * as React from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
import CommonStore from "../../Stores/CommonStore";
import * as CommonActionCreators from "../../ActionCreators/CommonActionCreators";
import SmartComponent from "./../SmartComponent";
/* tslint:disable:no-any */
const styles = require("./ContentPage.module.less");
export default class ContentPage extends SmartComponent {
    constructor() {
        super(CommonStore);
    }
    doRender() {
        const headerTitle = "Welcome to Lorem Ipsum";
        return React.createElement("div", {className: styles.container}, 
            React.createElement(ContentHeader, {isActive: true, title: headerTitle}), 
            React.createElement(ContentBody, {ref: "contentBodyRef", title: this.state.bodyTitle, summary: this.state.bodySummary}, 
                React.createElement("div", {className: styles.hello}, 
                    React.createElement("button", {onClick: () => this.onButtonClick()}, "Say Hello!"), 
                    React.createElement("span", null, 
                        " You said hello ", 
                        this.state.sayHelloCount, 
                        " time(s)"))
            ));
    }
    getState() {
        return {
            bodyTitle: CommonStore.getBodyTitle(),
            bodySummary: CommonStore.getBodySummary(),
            sayHelloCount: CommonStore.getSayHelloCount()
        };
    }
    onButtonClick() {
        CommonActionCreators.sayHello();
    }
}
//# sourceMappingURL=ContentPage.js.map