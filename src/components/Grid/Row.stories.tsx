import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Container from "./Container"
import Row, {IProps} from "./Row"

const meta: Meta<IProps> = {
  title: "Components/Grid/Row",
  component: Row
}

const RowStory: Story<IProps> = (args) => (
  <Container style={{backgroundColor: "#D2EAD6"}}>
    <Row {...args} style={{backgroundColor: "#6DBC7A"}}>
      A row
    </Row>
  </Container>
)

const Default = RowStory.bind({})
Default.args = {}

const NoGutters = RowStory.bind({})
NoGutters.args = {
  noGutters: true
}

export {Default, NoGutters}

export default meta
