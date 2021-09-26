var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var activeMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: 1;\n  z-index: 1;\n"], ["\n  opacity: 1;\n  z-index: 1;\n"])));
var SliderItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  transform: translateX(-50%);\n  transition: opacity 0.2s ease-in-out;\n  z-index: -1;\n\n  ", "\n"], ["\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  transform: translateX(-50%);\n  transition: opacity 0.2s ease-in-out;\n  z-index: -1;\n\n  ", "\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? activeMixin : "");
});
export default SliderItem;
var templateObject_1, templateObject_2;
