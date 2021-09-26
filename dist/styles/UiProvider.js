import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { CssBaseline } from "./index";
var UiProvider = function (props) {
    var children = props.children;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        children));
};
export default UiProvider;
