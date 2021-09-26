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
import ImageGallery from "./ImageGallery";
var meta = {
    title: "Components/ImageGallery",
    component: ImageGallery,
    argTypes: {}
};
var images = [
    "https://picsum.photos/id/11/1280/720",
    "https://picsum.photos/id/12/1024/768",
    "https://picsum.photos/id/13/1024/720",
    "https://picsum.photos/id/14/800/600",
    "https://picsum.photos/id/15/1024/768",
    "https://picsum.photos/id/16/1024/720",
    "https://picsum.photos/id/17/800/600",
    "https://picsum.photos/id/18/800/600",
    "https://picsum.photos/id/19/800/600",
    "https://picsum.photos/id/20/800/600"
];
var ImageGalleryStory = function (args) { return (React.createElement(ImageGallery, __assign({}, args, { images: images }))); };
var Default = ImageGalleryStory.bind({});
Default.args = {};
export { Default };
export default meta;
