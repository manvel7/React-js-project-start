import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Button, {IProps} from "./Button"

const meta: Meta<IProps> = {
  title: "Components/Button/Text",
  component: Button,
  argTypes: {
    onClick: {action: "onClick"}
  }
}

const ButtonStory: Story<IProps> = (args) => <Button {...args}>Button</Button>

const Large = ButtonStory.bind({})
Large.args = {
  size: "lg",
  variant: "text"
}

const LargeDisabled = ButtonStory.bind({})
LargeDisabled.args = {
  size: "lg",
  variant: "text",
  isDisabled: true
}

const Medium = ButtonStory.bind({})
Medium.args = {
  size: "md",
  variant: "text"
}

const MediumDisabled = ButtonStory.bind({})
MediumDisabled.args = {
  size: "md",
  variant: "text",
  isDisabled: true
}

const Small = ButtonStory.bind({})
Small.args = {
  size: "sm",
  variant: "text"
}

const SmallDisabled = ButtonStory.bind({})
SmallDisabled.args = {
  size: "sm",
  variant: "text",
  isDisabled: true
}

const Info = ButtonStory.bind({})
Info.args = {
  variant: "text",
  state: "info"
}

const Success = ButtonStory.bind({})
Success.args = {
  variant: "text",
  state: "success"
}

const Warn = ButtonStory.bind({})
Warn.args = {
  variant: "text",
  state: "warn"
}

const Error = ButtonStory.bind({})
Error.args = {
  variant: "text",
  state: "error"
}

export {
  Large,
  LargeDisabled,
  Medium,
  MediumDisabled,
  Small,
  SmallDisabled,
  Info,
  Success,
  Warn,
  Error
}

export default meta
