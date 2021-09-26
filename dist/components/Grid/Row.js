var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import clsx from "clsx";
import styled, { css } from "styled-components";
import { pxToRem } from "../../utils/unit";
var noGuttersMixin = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: 0;\n  margin-right: 0;\n\n  > .col,\n  > [class*=\"col-\"] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n"], ["\n  margin-left: 0;\n  margin-right: 0;\n\n  > .col,\n  > [class*=\"col-\"] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n"])));
var alignItemsMixin = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var alignItems = _a.alignItems;
    return "align-items: " + alignItems + ";";
});
var Row = styled.div.attrs(function (_a) {
    var className = _a.className, noGutters = _a.noGutters;
    return {
        className: clsx(className, {
            row: true,
            "no-gutters": noGutters
        })
    };
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: calc(\n    ", " / -2\n  );\n  margin-right: calc(\n    ", " / -2\n  );\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: calc(\n    ",
    " / -2\n  );\n  margin-right: calc(\n    ",
    " / -2\n  );\n\n  ", "\n  ", "\n"])), function (_a) {
    var _b = _a.theme, gutterWidth = _b.grid.gutterWidth, htmlFontSize = _b.typography.htmlFontSize;
    return pxToRem(gutterWidth, htmlFontSize);
}, function (_a) {
    var _b = _a.theme, gutterWidth = _b.grid.gutterWidth, htmlFontSize = _b.typography.htmlFontSize;
    return pxToRem(gutterWidth, htmlFontSize);
}, function (_a) {
    var noGutters = _a.noGutters;
    return (noGutters ? noGuttersMixin : "");
}, function (_a) {
    var alignItems = _a.alignItems;
    return (alignItems ? alignItemsMixin : "");
});
export default Row;
var templateObject_1, templateObject_2, templateObject_3;
