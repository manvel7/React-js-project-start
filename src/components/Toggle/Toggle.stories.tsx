import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Button from "../Button"
import Toggle from "./Toggle"

const meta: Meta = {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {}
}

const ToggleStory: Story = (args) => {
  const onActiveChange = (activeIndex: number) => {
    console.log("new active index: " + activeIndex)
  }

  return (
    <Toggle {...args} onActiveChange={onActiveChange}>
      <Button>first</Button>
      <Button>second</Button>
      <Button>third</Button>
    </Toggle>
  )
}

const Regular = ToggleStory.bind({})

const Small = ToggleStory.bind({})
Small.args = {
  size: "sm"
}

const ToggleInitialActiveStory: Story = (args) => {
  return (
    <Toggle {...args} initialActive={2}>
      <Button>first</Button>
      <Button>second</Button>
      <Button>third active</Button>
    </Toggle>
  )
}

const initialActive = ToggleInitialActiveStory.bind({})

export {Regular, Small, initialActive}

export default meta
