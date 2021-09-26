import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Button, {IProps} from "./Button"

const meta: Meta<IProps> = {
  title: "Components/Button/Outlined",
  component: Button,
  argTypes: {
    onClick: {action: "onClick"}
  }
}

const ButtonStory: Story<IProps> = (args) => <Button {...args}>Button</Button>

const Large = ButtonStory.bind({})
Large.args = {
  size: "lg",
  variant: "outlined"
}

const LargeDisabled = ButtonStory.bind({})
LargeDisabled.args = {
  size: "lg",
  variant: "outlined",
  isDisabled: true
}

const Medium = ButtonStory.bind({})
Medium.args = {
  size: "md",
  variant: "outlined"
}

const MediumDisabled = ButtonStory.bind({})
MediumDisabled.args = {
  size: "md",
  variant: "outlined",
  isDisabled: true
}

const Small = ButtonStory.bind({})
Small.args = {
  size: "sm",
  variant: "outlined"
}

const SmallDisabled = ButtonStory.bind({})
SmallDisabled.args = {
  size: "sm",
  variant: "outlined",
  isDisabled: true
}

const Info = ButtonStory.bind({})
Info.args = {
  variant: "outlined",
  state: "info"
}

const Success = ButtonStory.bind({})
Success.args = {
  variant: "outlined",
  state: "success"
}

const Warn = ButtonStory.bind({})
Warn.args = {
  variant: "outlined",
  state: "warn"
}

const Error = ButtonStory.bind({})
Error.args = {
  variant: "outlined",
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
