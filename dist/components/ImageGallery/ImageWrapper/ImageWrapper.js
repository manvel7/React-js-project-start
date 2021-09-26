var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import ImageGalleryList from "../List";
var activeMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-color: ", ";\n"], ["\n  border-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.primary;
});
var ImageWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 0.1rem solid transparent;\n  border-radius: 0.6rem;\n  overflow: hidden;\n\n  img {\n    height: 100%;\n    object-fit: cover;\n    vertical-align: middle;\n    width: 100%;\n  }\n\n  ", "\n\n  ", " & {\n    cursor: pointer;\n    flex: 1 1 0;\n  }\n"], ["\n  border: 0.1rem solid transparent;\n  border-radius: 0.6rem;\n  overflow: hidden;\n\n  img {\n    height: 100%;\n    object-fit: cover;\n    vertical-align: middle;\n    width: 100%;\n  }\n\n  ", "\n\n  ", " & {\n    cursor: pointer;\n    flex: 1 1 0;\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? activeMixin : "");
}, ImageGalleryList);
export default ImageWrapper;
var templateObject_1, templateObject_2;
