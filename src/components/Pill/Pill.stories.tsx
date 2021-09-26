import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Pill, {IProps} from "./Pill"

const meta: Meta<IProps> = {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    onClick: {action: "onClick"}
  }
}

const PillStory: Story<IProps> = (args) => <Pill {...args}>Pill</Pill>

const Active = PillStory.bind({})
Active.args = {
  isActive: true
}

const NotActive = PillStory.bind({})
NotActive.args = {
  isActive: false
}

const Medium = PillStory.bind({})
Medium.args = {
  size: "md"
}

const Small = PillStory.bind({})
Small.args = {
  size: "sm"
}

export {Active, NotActive, Medium, Small}

export default meta
