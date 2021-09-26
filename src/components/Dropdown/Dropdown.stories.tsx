import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Dropdown, {IProps} from "./Dropdown"
import DropdownItem from "./DropdownMenuItem"

const meta: Meta<IProps> = {
  title: "Components/Dropdown",
  component: Dropdown
}

const DropdownStory: Story<IProps> = (args) => (
  <Dropdown {...args}>
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
  </Dropdown>
)

const Medium = DropdownStory.bind({})
Medium.args = {
  size: "md",
  title: "Action"
}

const Small = DropdownStory.bind({})
Small.args = {
  size: "sm",
  title: "Action"
}

export {Medium, Small}

export default meta
