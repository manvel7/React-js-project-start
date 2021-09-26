var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var activeMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: none;\n  opacity: 1;\n  padding: 0.8rem 0;\n"], ["\n  max-height: none;\n  opacity: 1;\n  padding: 0.8rem 0;\n"])));
var AccordionContent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  max-height: 0;\n  opacity: 0;\n  transition: all 0.35s;\n\n  ", "\n"], ["\n  color: ", ";\n  max-height: 0;\n  opacity: 0;\n  transition: all 0.35s;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.text.dark;
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? activeMixin : "");
});
export default AccordionContent;
var templateObject_1, templateObject_2;
