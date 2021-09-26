import React from "react"
import {render} from "@testing-library/react"
import {SvgMock as Burger} from "../../assets/icons/burger.svg"
import {SvgMock as Logo} from "../../assets/icons/logo.svg"
import {SvgMock as Scout} from "../../assets/icons/scout.svg"
import {SvgMock as User} from "../../assets/icons/user.svg"
import {UiProvider} from "../../styles"
import Sidebar from "./Sidebar"
import SidebarDivider from "./SidebarDivider"
import SidebarItem from "./SidebarItem"

describe("Sidebar", () => {
  it("should match snapshot", () => {
    const result = render(
      <UiProvider>
        <Sidebar ToggleIcon={Burger}>
          <SidebarItem icon={<Logo />} title="Logo" displayPosition="top" />
          <SidebarItem icon={<Scout />} title="Scout" />
          <SidebarDivider />
          <SidebarItem
            icon={<Scout />}
            title="Scout (auto)"
            displayPosition="auto"
          />
          <SidebarItem
            icon={<User />}
            title="Profile"
            displayPosition="bottom"
          />
        </Sidebar>
      </UiProvider>
    )
    expect(result.container.firstChild).toMatchSnapshot()
  })
})
