import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Jumbotron, {IProps} from "./Jumbotron"

const meta: Meta<IProps> = {
  title: "Components/Jumbotron",
  component: Jumbotron,
  argTypes: {}
}

const JumbotronStory: Story<IProps> = (args) => (
  <Jumbotron {...args}>Jumbotron</Jumbotron>
)

const Large = JumbotronStory.bind({})
Large.args = {
  size: "lg"
}

const Small = JumbotronStory.bind({})
Small.args = {
  size: "sm"
}

export {Large, Small}

export default meta
