import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Button, {IProps} from "./Button"

const meta: Meta<IProps> = {
  title: "Components/Button/Default",
  component: Button,
  argTypes: {
    onClick: {action: "onClick"}
  }
}

const ButtonStory: Story<IProps> = (args) => <Button {...args}>Button</Button>

const Large = ButtonStory.bind({})
Large.args = {
  size: "lg",
  variant: "default"
}

const LargeDisabled = ButtonStory.bind({})
LargeDisabled.args = {
  size: "lg",
  variant: "default",
  isDisabled: true
}

const Medium = ButtonStory.bind({})
Medium.args = {
  size: "md",
  variant: "default"
}

const MediumDisabled = ButtonStory.bind({})
MediumDisabled.args = {
  size: "md",
  variant: "default",
  isDisabled: true
}

const Small = ButtonStory.bind({})
Small.args = {
  size: "sm",
  variant: "default"
}

const SmallDisabled = ButtonStory.bind({})
SmallDisabled.args = {
  size: "sm",
  variant: "default",
  isDisabled: true
}

const Info = ButtonStory.bind({})
Info.args = {
  state: "info"
}

const Success = ButtonStory.bind({})
Success.args = {
  state: "success"
}

const Warn = ButtonStory.bind({})
Warn.args = {
  state: "warn"
}

const Error = ButtonStory.bind({})
Error.args = {
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
