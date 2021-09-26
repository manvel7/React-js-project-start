import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Checkbox, {IProps} from "./Checkbox"

const meta: Meta<IProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    onChange: {action: "onChange"}
  }
}

const CheckboxStory: Story<IProps> = (args) => <Checkbox {...args} />

const DefaultCheckbox = CheckboxStory.bind({})
DefaultCheckbox.args = {
  label: "Default checkbox"
}

const DefaultChecked = CheckboxStory.bind({})
DefaultChecked.args = {
  label: "Default checked",
  checked: true
}

const DashedChecked = CheckboxStory.bind({})
DashedChecked.args = {
  label: "Dashed checkbox",
  checked: true,
  variant: "dashed"
}

const DefaultDisabled = CheckboxStory.bind({})
DefaultDisabled.args = {
  label: "Disabled checkbox",
  disabled: true,
  checked: true
}

const DashedDisabled = CheckboxStory.bind({})
DashedDisabled.args = {
  label: "Disabled dashed checkbox",
  checked: true,
  variant: "dashed",
  disabled: true
}

export {
  DefaultCheckbox,
  DefaultChecked,
  DashedChecked,
  DefaultDisabled,
  DashedDisabled
}

export default meta
