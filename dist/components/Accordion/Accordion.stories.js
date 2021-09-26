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
import Accordion from "./Accordion";
var meta = {
    title: "Components/Accordion",
    component: Accordion,
    argTypes: {
        onClick: { action: "onClick" }
    }
};
var AccordionStory = function (args) { return (React.createElement(Accordion, __assign({}, args, { label: "Accordion Demo" }),
    React.createElement("p", null, "Accordion"))); };
var Regular = AccordionStory.bind({});
Regular.args = {
    isActive: true
};
export { Regular };
export default meta;
