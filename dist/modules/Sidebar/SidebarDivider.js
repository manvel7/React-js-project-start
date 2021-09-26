var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var SidebarDivider = styled.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-color: ", ";\n  margin: 1.6rem auto;\n  opacity: 0.3;\n  width: calc(100% - 4rem);\n"], ["\n  border-color: ", ";\n  margin: 1.6rem auto;\n  opacity: 0.3;\n  width: calc(100% - 4rem);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.background.white;
});
export default SidebarDivider;
var templateObject_1;
