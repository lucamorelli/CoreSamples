// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";

import React = require('react');

class Home extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div>Using Typescript, React, and ASP.NET 5!!</div>
        );
    }
}

export = Home;