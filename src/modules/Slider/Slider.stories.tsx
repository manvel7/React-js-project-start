import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Slider from "./Slider"

const meta: Meta = {
  title: "Modules/Slider",
  component: Slider
}

const SliderStory: Story = (args) => (
  <Slider {...args} slides={[<div key="1">1</div>, <div key="2">2</div>]}>
    slider
  </Slider>
)

const Default = SliderStory.bind({})

export {Default}

export default meta
