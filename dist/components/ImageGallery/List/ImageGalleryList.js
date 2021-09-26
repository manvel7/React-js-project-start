var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import ImageWrapper from "../ImageWrapper";
import { h5Mixin } from "../../../styles/typography";
import { mediaBreakpointDown } from "../../../utils/breakpoint";
var mobileMixin = "\n  flex-direction: row;\n  margin-top: 0.8rem;\n  height: 8rem;\n\n  & > div {\n    margin-bottom: 0rem;\n    margin-right: 0.8rem;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n";
var moreRightMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > ", ":last-child {\n    position: relative;\n\n    &:after {\n      align-items: center;\n      background-color: rgba(0, 0, 0, 0.5);\n      bottom: 0;\n      color: ", ";\n      content: \"+", "\";\n      display: flex;\n      justify-content: center;\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n\n      ", "\n    }\n  }\n"], ["\n  & > ", ":last-child {\n    position: relative;\n\n    &:after {\n      align-items: center;\n      background-color: rgba(0, 0, 0, 0.5);\n      bottom: 0;\n      color: ", ";\n      content: \"+", "\";\n      display: flex;\n      justify-content: center;\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n\n      ", "\n    }\n  }\n"])), ImageWrapper, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.white;
}, function (_a) {
    var moreRight = _a.moreRight;
    return moreRight;
}, h5Mixin);
var moreLeftMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & > ", ":first-child {\n    position: relative;\n\n    &:after {\n      align-items: center;\n      background-color: rgba(0, 0, 0, 0.5);\n      bottom: 0;\n      color: ", ";\n      content: \"+", "\";\n      display: flex;\n      justify-content: center;\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n\n      ", "\n    }\n  }\n"], ["\n  & > ", ":first-child {\n    position: relative;\n\n    &:after {\n      align-items: center;\n      background-color: rgba(0, 0, 0, 0.5);\n      bottom: 0;\n      color: ", ";\n      content: \"+", "\";\n      display: flex;\n      justify-content: center;\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n\n      ", "\n    }\n  }\n"])), ImageWrapper, function (_a) {
    var theme = _a.theme;
    return theme.palette.text.white;
}, function (_a) {
    var moreLeft = _a.moreLeft;
    return moreLeft;
}, h5Mixin);
var ImageGalleryList = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex: 0 1 25%;\n  flex-direction: column;\n\n  & > div {\n    margin-bottom: 0.8rem;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  flex: 0 1 25%;\n  flex-direction: column;\n\n  & > div {\n    margin-bottom: 0.8rem;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var moreRight = _a.moreRight;
    return (moreRight ? moreRightMixin : "");
}, function (_a) {
    var moreLeft = _a.moreLeft;
    return (moreLeft ? moreLeftMixin : "");
}, function (_a) {
    var theme = _a.theme;
    return mediaBreakpointDown("xs", theme.grid.breakpoints, mobileMixin);
});
export default ImageGalleryList;
var templateObject_1, templateObject_2, templateObject_3;
