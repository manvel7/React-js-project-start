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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useMemo, useState } from "react";
import ImageWrapper from "./ImageWrapper";
import ImageGalleryWrapper from "./Wrapper";
import CurrentImage from "./CurrentImage";
import ImageGalleryList from "./List";
var DEFAULT_HEIGHT = 40;
var MIN_IMAGE_HEIGHT = 12;
var ImageGallery = function (props) {
    var images = props.images, containerHeight = props.containerHeight, rest = __rest(props, ["images", "containerHeight"]);
    var _a = useState(0), active = _a[0], setActive = _a[1];
    var _b = useState(0), moreRight = _b[0], setMoreRight = _b[1];
    var _c = useState(0), moreLeft = _c[0], setMoreLeft = _c[1];
    var imagesData = useMemo(function () {
        return images.map(function (image, index) { return ({ index: index, src: image }); });
    }, [images]);
    var visibleImagesCount = useMemo(function () {
        var count = Math.floor((props.containerHeight || DEFAULT_HEIGHT) / MIN_IMAGE_HEIGHT);
        return count > 1 ? count : 2;
    }, [props.containerHeight]);
    var visibleImages = useMemo(function () {
        var sliceFrom = 0;
        if (active > imagesData.length - Math.ceil(visibleImagesCount / 2)) {
            sliceFrom = imagesData.length - visibleImagesCount;
        }
        else if (active > 1) {
            sliceFrom = active - Math.floor(visibleImagesCount / 2);
        }
        if (sliceFrom < 0) {
            sliceFrom = 0;
        }
        setMoreRight(imagesData.length - sliceFrom - visibleImagesCount);
        setMoreLeft(sliceFrom);
        return imagesData.slice(sliceFrom, sliceFrom + visibleImagesCount);
    }, [imagesData, visibleImagesCount, active]);
    var activeImage = useMemo(function () {
        return imagesData.find(function (image) { return image.index === active; });
    }, [imagesData, active]);
    var selectImage = function (image) {
        setActive(image.index);
    };
    var onClickPrev = function () {
        if (active > 0) {
            setActive(active - 1);
        }
        else {
            setActive(imagesData.length - 1);
        }
    };
    var onClickNext = function () {
        if (active < imagesData.length - 1) {
            setActive(active + 1);
        }
        else {
            setActive(0);
        }
    };
    return (React.createElement(ImageGalleryWrapper, __assign({}, rest),
        React.createElement(CurrentImage, { src: activeImage === null || activeImage === void 0 ? void 0 : activeImage.src, containerHeight: containerHeight || DEFAULT_HEIGHT, onClickPrev: onClickPrev, onClickNext: onClickNext }),
        React.createElement(ImageGalleryList, { moreRight: moreRight, moreLeft: moreLeft }, visibleImages.map(function (image) { return (React.createElement(ImageWrapper, { key: image.index, isActive: active === image.index, onClick: function () { return selectImage(image); } },
            React.createElement("img", { src: image.src, alt: "" }))); }))));
};
ImageGallery.defaultProps = {
    containerHeight: DEFAULT_HEIGHT
};
export default ImageGallery;
