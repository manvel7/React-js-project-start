var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var openedMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: 1;\n  transform: rotateX(0);\n"], ["\n  opacity: 1;\n  transform: rotateX(0);\n"])));
var DropdownMenu = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: ", ";\n  min-width: 100%;\n  opacity: 0;\n  position: absolute;\n  transform: rotateX(-30deg);\n  transform-origin: top;\n  transition: opacity 0.15s ease-in, transform 0.15s ease-in;\n  z-index: 5;\n\n  ", "\n"], ["\n  display: ", ";\n  min-width: 100%;\n  opacity: 0;\n  position: absolute;\n  transform: rotateX(-30deg);\n  transform-origin: top;\n  transition: opacity 0.15s ease-in, transform 0.15s ease-in;\n  z-index: 5;\n\n  ", "\n"])), function (_a) {
    var displayValue = _a.displayValue;
    return displayValue;
}, function (_a) {
    var isOpened = _a.isOpened;
    return (isOpened ? openedMixin : "");
});
export default DropdownMenu;
var templateObject_1, templateObject_2;
