var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import Col from "./Col";
import Container from "./Container";
import Row from "./Row";
var meta = {
    title: "Components/Grid/Col",
    component: Col
};
var ColStory = function (args) { return (React.createElement(Container, { style: { backgroundColor: "#D2EAD6" } },
    React.createElement(Row, { style: { backgroundColor: "#6DBC7A" } },
        React.createElement(Col, __assign({}, args, { style: { backgroundColor: "#37A349" } }), "This is a column"),
        React.createElement(Col, { style: { backgroundColor: "#BCBAB2" } }, "This is another column"),
        React.createElement(Col, { style: { backgroundColor: "#858275" } }, "This is the last column")))); };
var Default = ColStory.bind({});
Default.args = {};
var WithSize = ColStory.bind({});
WithSize.args = {
    md: { size: 3 }
};
var WithOffset = ColStory.bind({});
WithOffset.args = {
    md: { size: 3, offset: 5 }
};
var WithOrder = ColStory.bind({});
WithOrder.args = {
    md: { size: 3, order: "last" }
};
export { Default, WithSize, WithOffset, WithOrder };
export default meta;
