var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { mediaBreakpointDown } from "../../../utils/breakpoint";
var mobileMixin = "\n  flex-direction: column;\n";
var ImageGalleryWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  width: ", ";\n\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: ",
    ";\n\n  ", "\n"])), function (_a) {
    var containerWidth = _a.containerWidth;
    return containerWidth ? containerWidth + "rem" : "100%";
}, function (_a) {
    var theme = _a.theme;
    return mediaBreakpointDown("xs", theme.grid.breakpoints, mobileMixin);
});
export default ImageGalleryWrapper;
var templateObject_1;
