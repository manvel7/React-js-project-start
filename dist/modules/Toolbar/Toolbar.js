var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var Toolbar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  border-bottom: 0.1rem solid ", ";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  /* TODO: check this to match Navbar height */\n  padding: 1.55rem;\n\n  & > div > div {\n    margin-right: 1.6rem;\n  }\n\n  .return-button {\n    margin-right: 1.6rem;\n\n    @media (min-width: ", ") {\n      visibility: hidden;\n    }\n  }\n"], ["\n  align-items: center;\n  border-bottom: 0.1rem solid ", ";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  /* TODO: check this to match Navbar height */\n  padding: 1.55rem;\n\n  & > div > div {\n    margin-right: 1.6rem;\n  }\n\n  .return-button {\n    margin-right: 1.6rem;\n\n    @media (min-width: ", ") {\n      visibility: hidden;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.grid.breakpoints.sm;
});
export default Toolbar;
var templateObject_1;
