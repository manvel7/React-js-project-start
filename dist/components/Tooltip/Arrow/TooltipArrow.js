var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var TooltipArrow = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 1rem;\n  position: absolute;\n  width: 1rem;\n\n  :before {\n    border-style: solid;\n    content: \"\";\n    display: block;\n    height: 0;\n    margin: auto;\n    width: 0;\n  }\n\n  :after {\n    border-style: solid;\n    content: \"\";\n    display: block;\n    height: 0;\n    margin: auto;\n    position: absolute;\n    width: 0;\n  }\n\n  &[data-placement*=\"bottom\"] {\n    left: 0;\n    margin-top: -0.6rem;\n    top: 0;\n  }\n\n  &[data-placement*=\"bottom\"]:before {\n    border-color: transparent transparent ", "\n      transparent;\n    border-width: 0 0.6rem 0.6rem 0.6rem;\n    position: absolute;\n    top: -0.1rem;\n  }\n\n  &[data-placement*=\"bottom\"]:after {\n    border-color: transparent transparent\n      ", " transparent;\n    border-width: 0 0.6rem 0.6rem 0.6rem;\n  }\n\n  &[data-placement*=\"top\"] {\n    bottom: 0;\n    left: 0;\n    margin-bottom: -0.9rem;\n  }\n\n  &[data-placement*=\"top\"]:before {\n    border-color: ", " transparent transparent\n      transparent;\n    border-width: 0.6rem 0.6rem 0 0.6rem;\n    position: absolute;\n    top: 0.1rem;\n  }\n\n  &[data-placement*=\"top\"]:after {\n    border-color: ", " transparent\n      transparent transparent;\n    border-width: 0.6rem 0.6rem 0 0.6rem;\n  }\n\n  &[data-placement*=\"right\"] {\n    left: 0;\n    margin-left: -0.8rem;\n  }\n\n  &[data-placement*=\"right\"]:before {\n    border-color: transparent ", " transparent\n      transparent;\n    border-width: 0.6rem 0.6rem 0.6rem 0;\n  }\n\n  &[data-placement*=\"right\"]:after {\n    border-color: transparent ", "\n      transparent transparent;\n    border-width: 0.6rem 0.6rem 0.6rem 0;\n    left: 0.4rem;\n    top: 0;\n  }\n\n  &[data-placement*=\"left\"] {\n    margin-right: -0.8rem;\n    right: 0;\n  }\n\n  &[data-placement*=\"left\"]:before {\n    border-color: transparent transparent transparent\n      ", ";\n    border-width: 0.6rem 0 0.6rem 0.6rem;\n  }\n\n  &[data-placement*=\"left\"]:after {\n    border-color: transparent transparent transparent\n      ", ";\n    border-width: 0.6rem 0 0.6rem 0.6rem;\n    left: 0.1rem;\n    top: 0;\n  }\n"], ["\n  height: 1rem;\n  position: absolute;\n  width: 1rem;\n\n  :before {\n    border-style: solid;\n    content: \"\";\n    display: block;\n    height: 0;\n    margin: auto;\n    width: 0;\n  }\n\n  :after {\n    border-style: solid;\n    content: \"\";\n    display: block;\n    height: 0;\n    margin: auto;\n    position: absolute;\n    width: 0;\n  }\n\n  &[data-placement*=\"bottom\"] {\n    left: 0;\n    margin-top: -0.6rem;\n    top: 0;\n  }\n\n  &[data-placement*=\"bottom\"]:before {\n    border-color: transparent transparent ", "\n      transparent;\n    border-width: 0 0.6rem 0.6rem 0.6rem;\n    position: absolute;\n    top: -0.1rem;\n  }\n\n  &[data-placement*=\"bottom\"]:after {\n    border-color: transparent transparent\n      ", " transparent;\n    border-width: 0 0.6rem 0.6rem 0.6rem;\n  }\n\n  &[data-placement*=\"top\"] {\n    bottom: 0;\n    left: 0;\n    margin-bottom: -0.9rem;\n  }\n\n  &[data-placement*=\"top\"]:before {\n    border-color: ", " transparent transparent\n      transparent;\n    border-width: 0.6rem 0.6rem 0 0.6rem;\n    position: absolute;\n    top: 0.1rem;\n  }\n\n  &[data-placement*=\"top\"]:after {\n    border-color: ", " transparent\n      transparent transparent;\n    border-width: 0.6rem 0.6rem 0 0.6rem;\n  }\n\n  &[data-placement*=\"right\"] {\n    left: 0;\n    margin-left: -0.8rem;\n  }\n\n  &[data-placement*=\"right\"]:before {\n    border-color: transparent ", " transparent\n      transparent;\n    border-width: 0.6rem 0.6rem 0.6rem 0;\n  }\n\n  &[data-placement*=\"right\"]:after {\n    border-color: transparent ", "\n      transparent transparent;\n    border-width: 0.6rem 0.6rem 0.6rem 0;\n    left: 0.4rem;\n    top: 0;\n  }\n\n  &[data-placement*=\"left\"] {\n    margin-right: -0.8rem;\n    right: 0;\n  }\n\n  &[data-placement*=\"left\"]:before {\n    border-color: transparent transparent transparent\n      ", ";\n    border-width: 0.6rem 0 0.6rem 0.6rem;\n  }\n\n  &[data-placement*=\"left\"]:after {\n    border-color: transparent transparent transparent\n      ", ";\n    border-width: 0.6rem 0 0.6rem 0.6rem;\n    left: 0.1rem;\n    top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
});
export default TooltipArrow;
var templateObject_1;
