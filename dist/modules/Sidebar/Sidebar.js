import React, { useState } from "react";
import clsx from "clsx";
import SidebarDivider from "./SidebarDivider";
import SidebarItem from "./SidebarItem";
import SidebarWrapper from "./SidebarWrapper";
var Sidebar = function (props) {
    var children = props.children, activeAppName = props.activeAppName, ToggleIcon = props.ToggleIcon;
    var _a = useState(false), isExpanded = _a[0], setIsExpanded = _a[1];
    var onMenuToggle = function () {
        setIsExpanded(function (prev) { return !prev; });
    };
    var sidebarItems = React.Children.map(children, function (item) {
        if (typeof item !== "object" ||
            (item.type !== SidebarItem && item.type !== SidebarDivider)) {
            throw new TypeError("Sidebar children should only contain SidebarItem and SidebarDivider elements");
        }
        if (item.type === SidebarDivider) {
            return item;
        }
        return React.cloneElement(item, {
            className: clsx(item.props.className),
            onClick: function (event) {
                setIsExpanded(false);
                if (item.props.onClick) {
                    item.props.onClick(event);
                }
            }
        });
    });
    return (React.createElement(SidebarWrapper, { className: clsx({
            expanded: isExpanded
        }) },
        React.createElement("div", { className: "mobile-heading" },
            React.createElement("div", { className: "burger-button", onClick: onMenuToggle },
                React.createElement(ToggleIcon, null)),
            React.createElement("h4", null, activeAppName)),
        sidebarItems));
};
Sidebar.defaultProps = {
    activeAppName: "Linda Forest"
};
export default Sidebar;
