import * as React from "react";
import ContentPage from "./Components/ContentPage/ContentPage";
import * as CommonActionCreators from "./ActionCreators/CommonActionCreators";
import BaseComponent from "./Components/BaseComponent";
require("./Log/ActionLogger");
require("./Global/Styles/global.less");
export default class App extends BaseComponent {
    doRender() {
        return React.createElement("div", null, 
            React.createElement(ContentPage, null)
        );
    }
    componentDidMount() {
        CommonActionCreators.loadApp();
    }
}
;
//# sourceMappingURL=App.js.map