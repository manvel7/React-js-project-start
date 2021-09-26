import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Pill from "../Pill"
import Tooltip, {IProps} from "./Tooltip"

const meta: Meta<IProps> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: ["top", "bottom", "left", "right"]
      }
    },
    trigger: {
      control: {
        type: "select",
        options: ["click", "hover", "none"]
      }
    },
    tooltipShown: {
      control: {
        type: "boolean"
      }
    },
    followCursor: {
      control: {
        type: "boolean"
      }
    }
  }
}

const TooltipStory: Story<IProps> = (args) => <Tooltip {...args} />

const TextReference = TooltipStory.bind({})
TextReference.args = {
  children: "Text reference",
  content: "tooltip"
}

const Manual = TooltipStory.bind({})
Manual.args = {
  children: <Pill>Manual state</Pill>,
  content: "tooltip",
  trigger: "none",
  tooltipShown: true
}

const Placement = TooltipStory.bind({})
Placement.args = {
  children: <Pill>Right placement</Pill>,
  content: "tooltip",
  placement: "right"
}

export {TextReference, Manual, Placement}

export default meta
