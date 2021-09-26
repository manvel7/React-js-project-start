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
import Container from "./Container";
import Row from "./Row";
var meta = {
    title: "Components/Grid/Row",
    component: Row
};
var RowStory = function (args) { return (React.createElement(Container, { style: { backgroundColor: "#D2EAD6" } },
    React.createElement(Row, __assign({}, args, { style: { backgroundColor: "#6DBC7A" } }), "A row"))); };
var Default = RowStory.bind({});
Default.args = {};
var NoGutters = RowStory.bind({});
NoGutters.args = {
    noGutters: true
};
export { Default, NoGutters };
export default meta;
