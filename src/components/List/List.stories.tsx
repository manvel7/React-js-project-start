import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import List, {IProps} from "./List"
import ListItem from "./ListItem"

const meta: Meta<IProps> = {
  title: "Components/List",
  component: List,
  argTypes: {}
}

const ListStory: Story<IProps> = (args) => (
  <List {...args}>
    <ListItem>item 1</ListItem>
    <ListItem isActive={true}>item 2</ListItem>
    <ListItem>item 3</ListItem>
  </List>
)

const Regular = ListStory.bind({})

export {Regular}

export default meta
