import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import {ReactComponent as Burger} from "../../assets/icons/burger.svg"
import {ReactComponent as Logo} from "../../assets/icons/logo.svg"
import {ReactComponent as Scout} from "../../assets/icons/scout.svg"
import {ReactComponent as User} from "../../assets/icons/user.svg"
import Sidebar, {IProps} from "./Sidebar"
import {SidebarDivider, SidebarItem} from "./index"

const meta: Meta<IProps> = {
  title: "Modules/Sidebar",
  component: Sidebar
}

const SidebarStory: Story<IProps> = (args) => (
  <Sidebar {...args} ToggleIcon={Burger}>
    <SidebarItem icon={<Logo />} title="Logo" displayPosition="top" />
    <SidebarItem icon={<Scout />} title="Scout" />
    <SidebarDivider />
    <SidebarItem icon={<Scout />} title="Scout" />
    <SidebarItem icon={<Scout />} title="Scout (auto)" displayPosition="auto" />
    <SidebarItem icon={<User />} title="Profile" displayPosition="bottom" />
  </Sidebar>
)

const Default = SidebarStory.bind({})

export {Default}

export default meta
