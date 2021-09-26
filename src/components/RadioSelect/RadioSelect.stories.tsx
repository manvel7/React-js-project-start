import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import RadioItem from "./RadioItem"
import RadioSelect, {IProps} from "./RadioSelect"

const meta: Meta<IProps> = {
  title: "Components/RadioSelect",
  component: RadioSelect,
  argTypes: {
    onValueChange: {
      action: "onValueChange"
    }
  }
}

const Default: Story<IProps> = (args) => (
  <RadioSelect {...args}>
    <RadioItem label="First item" value="first" />
    <RadioItem label="Second item" value="second" />
    <RadioItem label="Third item" value="third" />
  </RadioSelect>
)

const WithoutLabels: Story<IProps> = (args) => (
  <RadioSelect {...args}>
    <RadioItem value="first" />
    <RadioItem value="second" />
    <RadioItem value="third" />
  </RadioSelect>
)

const WithAutoValues: Story<IProps> = (args) => (
  <RadioSelect {...args}>
    <RadioItem label="First item" />
    <RadioItem label="Second item" />
    <RadioItem label="Third item" />
  </RadioSelect>
)

const ErrorState = Default.bind({})
ErrorState.args = {
  error: true
}

const DisabledState = Default.bind({})
DisabledState.args = {
  disabled: true
}

export {Default, WithoutLabels, WithAutoValues, ErrorState, DisabledState}

export default meta
