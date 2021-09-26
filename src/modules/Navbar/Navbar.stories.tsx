import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Navbar, {IProps} from "./Navbar"
import {NavTitle, Nav, NavItem} from "./index"

const meta: Meta<IProps> = {
  title: "Modules/Navbar",
  component: Navbar
}

const NavbarStory: Story<IProps> = (args) => (
  <Navbar {...args}>
    <NavTitle>NavbarStory</NavTitle>
    <Nav>
      <NavItem>Active</NavItem>
      <NavItem isActive={false}>Not Active</NavItem>
    </Nav>
  </Navbar>
)

const Default = NavbarStory.bind({})

export {Default}

export default meta
