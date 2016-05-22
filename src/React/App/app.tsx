// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";

import React = require('react');

interface Props extends React.Props<App> {
    children?: any
}

class App extends React.Component<Props, {}> {
    render(): JSX.Element {
        return <div>{this.props.children}</div>;
    }
}

export = App;