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
import Slider from "./Slider";
var meta = {
    title: "Modules/Slider",
    component: Slider
};
var SliderStory = function (args) { return (React.createElement(Slider, __assign({}, args, { slides: [React.createElement("div", { key: "1" }, "1"), React.createElement("div", { key: "2" }, "2")] }), "slider")); };
var Default = SliderStory.bind({});
export { Default };
export default meta;
