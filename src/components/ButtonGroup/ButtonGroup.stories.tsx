import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Button from "../Button"
import ButtonGroup from "../ButtonGroup/ButtonGroup"

const meta: Meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {}
}

const ButtonGroupStory: Story = (args) => (
  <ButtonGroup {...args}>
    <Button size="sm">First</Button>
    <Button size="sm">Second</Button>
    <Button size="sm">Third</Button>
  </ButtonGroup>
)

const Regular = ButtonGroupStory.bind({})

export {Regular}

export default meta
