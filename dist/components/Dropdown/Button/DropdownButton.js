import React from "react";
import { faCaretDown } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";
var DropdownButton = function (_a) {
    var size = _a.size, onButtonClick = _a.onButtonClick, onToggleOpen = _a.onToggleOpen, title = _a.title, isOpened = _a.isOpened;
    return (React.createElement(ButtonGroup, null,
        React.createElement(Button, { size: size, onClick: onButtonClick }, title),
        React.createElement(Button, { size: size, onClick: onToggleOpen },
            React.createElement(FontAwesomeIcon, { icon: faCaretDown, size: "sm", rotation: isOpened ? 180 : undefined }))));
};
export default DropdownButton;
