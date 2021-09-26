import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import TextInput, {IProps} from "./TextInput"

const meta: Meta<IProps> = {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {}
}

const TextInputStory: Story<IProps> = (args) => <TextInput {...args} />

const Default = TextInputStory.bind({})
Default.args = {
  label: "Input Label",
  placeholder: "Placeholder",
  id: "test-1"
}

const Disabled = TextInputStory.bind({})
Disabled.args = {
  label: "Input Label",
  placeholder: "Placeholder",
  id: "test-2",
  disabled: true
}

const Large = TextInputStory.bind({})
Large.args = {
  label: "Input Label",
  placeholder: "Placeholder",
  displaySize: "lg",
  id: "test-3",
  value: "Input Value"
}

const Small = TextInputStory.bind({})
Small.args = {
  label: "Input Label",
  placeholder: "Placeholder",
  id: "test-4",
  displaySize: "sm"
}

const ExtraSmall = TextInputStory.bind({})
ExtraSmall.args = {
  label: "Input Label",
  placeholder: "Placeholder",
  id: "test-5",
  displaySize: "xs"
}

export {Default, Disabled, Large, Small, ExtraSmall}

export default meta
