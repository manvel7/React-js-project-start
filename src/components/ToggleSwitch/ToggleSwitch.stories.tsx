import React, {useState} from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import ToggleSwitch from "./ToggleSwitch"

const meta: Meta = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch
}

const ToggleSwitchStory: Story = (args) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    setChecked((prev) => !prev)
  }

  return (
    <ToggleSwitch
      {...args}
      checked={checked}
      onChange={onChange}
      label="Switch"
    />
  )
}

const Default = ToggleSwitchStory.bind({})

const Disabled = ToggleSwitchStory.bind({})
Disabled.args = {
  disabled: true
}
const ErrorState = ToggleSwitchStory.bind({})
ErrorState.args = {
  error: true
}

export {Default, Disabled, ErrorState}

export default meta
