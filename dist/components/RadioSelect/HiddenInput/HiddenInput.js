var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var HiddenInput = styled.input.attrs(function (_a) {
    var value = _a.value, checked = _a.checked;
    return ({
        type: "radio",
        value: value,
        checked: checked
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 0.1rem;\n  margin: -0.1rem;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 0.1rem;\n"], ["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 0.1rem;\n  margin: -0.1rem;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 0.1rem;\n"])));
export default HiddenInput;
var templateObject_1;
