import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import {Dropdown, DropdownMenuItem} from "../../components/Dropdown"
import Toolbar from "./Toolbar"

const meta: Meta = {
  title: "Modules/Toolbar",
  component: Toolbar
}

const ToolbarStory: Story = (args) => (
  <Toolbar {...args}>
    <Dropdown size="sm" title="Share">
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
    </Dropdown>
    <Dropdown size="sm" title="Export">
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
    </Dropdown>
  </Toolbar>
)

const Default = ToolbarStory.bind({})

export {Default}

export default meta
