var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { h4Mixin, h6Mixin, smallMixin } from "../../styles/typography";
var lgMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 0.8rem;\n  padding: 0.8rem 1.6rem;\n  ", "\n"], ["\n  border-radius: 0.8rem;\n  padding: 0.8rem 1.6rem;\n  ", "\n"])), h4Mixin());
var smMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 0.3rem;\n  padding: 0.2rem 1.6rem;\n  ", "\n"], ["\n  border-radius: 0.3rem;\n  padding: 0.2rem 1.6rem;\n  ", "\n"])), smallMixin());
var mdMixin = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 0.4rem;\n  padding: 0.6rem 1.6rem;\n  ", "\n"], ["\n  border-radius: 0.4rem;\n  padding: 0.6rem 1.6rem;\n  ", "\n"])), h6Mixin());
var outlinedMixin = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: transparent;\n  border: 0.1rem solid\n    ", ";\n  box-sizing: border-box;\n  color: ", ";\n"], ["\n  background-color: transparent;\n  border: 0.1rem solid\n    ",
    ";\n  box-sizing: border-box;\n  color: ",
    ";\n"])), function (_a) {
    var isDisabled = _a.isDisabled, state = _a.state, theme = _a.theme;
    if (isDisabled) {
        return theme.palette.disabled;
    }
    switch (state) {
        case "error":
            return theme.palette.alert.error;
        case "warn":
            return theme.palette.alert.warn;
        case "success":
            return theme.palette.alert.success;
        case "info":
        default:
            return theme.palette.primary;
    }
}, function (_a) {
    var isDisabled = _a.isDisabled, theme = _a.theme;
    return isDisabled ? theme.palette.text.darkDimmed : theme.palette.primary;
});
var textMixin = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n"], ["\n  background-color: transparent;\n  color: ",
    ";\n"])), function (_a) {
    var isDisabled = _a.isDisabled, theme = _a.theme;
    return isDisabled ? theme.palette.text.darkDimmed : theme.palette.primary;
});
var defaultMixin = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n"], ["\n  background-color: ",
    ";\n  color: ",
    ";\n"])), function (_a) {
    var isDisabled = _a.isDisabled, state = _a.state, theme = _a.theme;
    if (isDisabled) {
        return theme.palette.background.disabled;
    }
    switch (state) {
        case "error":
            return theme.palette.alert.error;
        case "warn":
            return theme.palette.alert.warn;
        case "success":
            return theme.palette.alert.success;
        case "info":
        default:
            return theme.palette.primary;
    }
}, function (_a) {
    var isDisabled = _a.isDisabled, theme = _a.theme;
    return isDisabled ? theme.palette.text.darkDimmed : theme.palette.text.white;
});
var infoMixin = css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.info;
});
var warnMixin = css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.warn;
});
var errorMixin = css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.error;
});
var successMixin = css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.alert.success;
});
var Button = styled.button(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  border: 0.2rem solid transparent;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  border: 0.2rem solid transparent;\n  cursor: pointer;\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var size = _a.size;
    switch (size) {
        case "lg":
            return lgMixin;
        case "sm":
            return smMixin;
        case "md":
        default:
            return mdMixin;
    }
}, function (_a) {
    var variant = _a.variant;
    switch (variant) {
        case "outlined":
            return outlinedMixin;
        case "text":
            return textMixin;
        case "default":
        default:
            return defaultMixin;
    }
}, function (_a) {
    var state = _a.state, variant = _a.variant;
    if (!variant || variant === "default") {
        return "";
    }
    switch (state) {
        case "info":
            return infoMixin;
        case "success":
            return successMixin;
        case "warn":
            return warnMixin;
        case "error":
            return errorMixin;
        default:
            return "";
    }
});
export default Button;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
