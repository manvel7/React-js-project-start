import React, { useState } from "react";
import { faTimes } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AlertStyledComponent from "./AlertStyledComponent";
import CloseButton from "./CloseButton";
var Alert = function (props) {
    var _a = useState(false), dismissed = _a[0], setDismissed = _a[1];
    var isDismissible = props.isDismissible, children = props.children, variant = props.variant, onClose = props.onClose;
    var handleClose = function () {
        setDismissed(true);
        if (onClose) {
            onClose();
        }
    };
    return (React.createElement(AlertStyledComponent, { role: "alert", className: dismissed ? "hidden" : "", isDismissible: isDismissible || false, variant: variant },
        React.createElement("div", null, children),
        isDismissible ? (React.createElement(CloseButton, { onClick: handleClose, variant: variant },
            React.createElement(FontAwesomeIcon, { icon: faTimes }))) : null));
};
export default Alert;
