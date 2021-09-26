import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Container, {IProps} from "./Container"

const meta: Meta<IProps> = {
  title: "Components/Grid/Container",
  component: Container,
  argTypes: {
    onClick: {action: "onClick"}
  }
}

const ContainerStory: Story<IProps> = (args) => (
  <Container {...args} style={{backgroundColor: "#D2EAD6"}}>
    A container
  </Container>
)

const Default = ContainerStory.bind({})
Default.args = {}

const Fluid = ContainerStory.bind({})
Fluid.args = {
  fluid: true
}
const FluidSm = ContainerStory.bind({})
FluidSm.args = {
  fluid: "sm"
}

const FluidLg = ContainerStory.bind({})
FluidLg.args = {
  fluid: "lg"
}

export {Default, Fluid, FluidSm, FluidLg}

export default meta
