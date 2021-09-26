import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Accordion, {IProps} from "./Accordion"

const meta: Meta<IProps> = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    onClick: {action: "onClick"}
  }
}

const AccordionStory: Story<IProps> = (args) => (
  <Accordion {...args} label="Accordion Demo">
    <p>Accordion</p>
  </Accordion>
)

const Regular = AccordionStory.bind({})
Regular.args = {
  isActive: true
}

export {Regular}

export default meta
