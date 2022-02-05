"use strict";
exports.__esModule = true;
var React = require("react");
var MyComponent = function (props) {
    return <div>hello, world! {props.count}</div>;
};
var ParentComponent = function () {
    return <MyComponent count={3}/>;
};
