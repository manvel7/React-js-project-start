import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/pro-regular-svg-icons";
import Wrapper from "./Wrapper";
import ImageWrapper from "../ImageWrapper";
var CurrentImage = function (props) {
    var src = props.src, containerHeight = props.containerHeight, onClickPrev = props.onClickPrev, onClickNext = props.onClickNext;
    return (React.createElement(Wrapper, { containerHeight: containerHeight },
        React.createElement(ImageWrapper, { style: { height: "100%" } },
            React.createElement("img", { src: src, alt: "" })),
        React.createElement("div", { className: "nav-buttons hidden-sm-down" },
            React.createElement("button", { onClick: onClickPrev },
                React.createElement(FontAwesomeIcon, { size: "lg", icon: faArrowLeft })),
            React.createElement("button", { onClick: onClickNext },
                React.createElement(FontAwesomeIcon, { size: "lg", icon: faArrowRight })))));
};
export default CurrentImage;
