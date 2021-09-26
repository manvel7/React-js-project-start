var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import Alert from "./Alert";
var meta = {
    title: "Components/Alert",
    component: Alert,
    argTypes: {
        onClose: { action: "onClose" }
    }
};
var AlertStory = function (args) { return React.createElement(Alert, __assign({}, args), "Alert"); };
var DefaultDismissibleAlert = AlertStory.bind({});
DefaultDismissibleAlert.args = {
    isDismissible: true
};
var InfoAlert = AlertStory.bind({});
InfoAlert.args = {
    variant: "info"
};
var SuccessAlert = AlertStory.bind({});
SuccessAlert.args = {
    variant: "success"
};
var WarningAlert = AlertStory.bind({});
WarningAlert.args = {
    variant: "warning"
};
var ErrorAlert = AlertStory.bind({});
ErrorAlert.args = {
    variant: "error"
};
export { DefaultDismissibleAlert, InfoAlert, SuccessAlert, WarningAlert, ErrorAlert };
export default meta;
