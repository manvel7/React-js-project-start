import React, { useState } from "react";
import { Pagination } from "../../index";
import GhostWrapper from "./GhostWrapper";
import SliderItem from "./Item";
import PaginationWrapper from "./PaginationWrapper";
import SliderWrapper from "./Wrapper";
var Slider = function (props) {
    var slides = props.slides;
    var _a = useState(1), currentSlide = _a[0], setCurrentSlide = _a[1];
    var computedSlides = React.Children.map(slides, function (slide, index) {
        return (React.createElement(SliderItem, { isActive: index + 1 === currentSlide }, slide));
    });
    return (React.createElement("div", null,
        React.createElement(SliderWrapper, null,
            computedSlides,
            React.createElement(GhostWrapper, null, slides)),
        React.createElement(PaginationWrapper, null,
            React.createElement(Pagination, { variant: "circle", hidePageNumber: true, currentPage: currentSlide, pageCount: slides.length, onPageChange: setCurrentSlide }))));
};
export default Slider;
