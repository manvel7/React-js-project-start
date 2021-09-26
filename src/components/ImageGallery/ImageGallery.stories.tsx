import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import ImageGallery, {IProps} from "./ImageGallery"

const meta: Meta<IProps> = {
  title: "Components/ImageGallery",
  component: ImageGallery,
  argTypes: {}
}

const images = [
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
]

const ImageGalleryStory: Story<IProps> = (args) => (
  <ImageGallery {...args} images={images} />
)

const Default = ImageGalleryStory.bind({})
Default.args = {}

export {Default}

export default meta
