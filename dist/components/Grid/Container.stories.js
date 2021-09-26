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
var meta = {
    title: "Components/Grid/Container",
    component: Container,
    argTypes: {
        onClick: { action: "onClick" }
    }
};
var ContainerStory = function (args) { return (React.createElement(Container, __assign({}, args, { style: { backgroundColor: "#D2EAD6" } }), "A container")); };
var Default = ContainerStory.bind({});
Default.args = {};
var Fluid = ContainerStory.bind({});
Fluid.args = {
    fluid: true
};
var FluidSm = ContainerStory.bind({});
FluidSm.args = {
    fluid: "sm"
};
var FluidLg = ContainerStory.bind({});
FluidLg.args = {
    fluid: "lg"
};
export { Default, Fluid, FluidSm, FluidLg };
export default meta;
