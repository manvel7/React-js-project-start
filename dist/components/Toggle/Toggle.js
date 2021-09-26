import React, { useState } from "react";
import clsx from "clsx";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
var Toggle = function (props) {
    var children = props.children, initialActive = props.initialActive, size = props.size, onActiveChange = props.onActiveChange;
    var _a = useState(initialActive || 0), activeIndex = _a[0], setActiveIndex = _a[1];
    var buttons = React.Children.map(children, function (button, index) {
        if (typeof button !== "object" || button.type !== Button) {
            throw new TypeError("Toggle children should only contain Button elements");
        }
        return React.cloneElement(button, {
            className: clsx(button.props.className, {
                "toggle__button--active": activeIndex === index,
                "toggle__button--inactive": activeIndex !== index
            }),
            onClick: function (event) {
                setActiveIndex(index);
                if (onActiveChange) {
                    onActiveChange(index);
                }
                if (button.props.onClick) {
                    button.props.onClick(event);
                }
            },
            variant: activeIndex !== index ? "outlined" : "default",
            size: size
        });
    });
    return React.createElement(ButtonGroup, null, buttons);
};
export default Toggle;
