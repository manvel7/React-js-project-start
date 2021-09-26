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
import Jumbotron from "./Jumbotron";
var meta = {
    title: "Components/Jumbotron",
    component: Jumbotron,
    argTypes: {}
};
var JumbotronStory = function (args) { return (React.createElement(Jumbotron, __assign({}, args), "Jumbotron")); };
var Large = JumbotronStory.bind({});
Large.args = {
    size: "lg"
};
var Small = JumbotronStory.bind({});
Small.args = {
    size: "sm"
};
export { Large, Small };
export default meta;
