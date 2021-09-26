import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Col, {IProps} from "./Col"
import Container from "./Container"
import Row from "./Row"

const meta: Meta<IProps> = {
  title: "Components/Grid/Col",
  component: Col
}

const ColStory: Story<IProps> = (args) => (
  <Container style={{backgroundColor: "#D2EAD6"}}>
    <Row style={{backgroundColor: "#6DBC7A"}}>
      <Col {...args} style={{backgroundColor: "#37A349"}}>
        This is a column
      </Col>
      <Col style={{backgroundColor: "#BCBAB2"}}>This is another column</Col>
      <Col style={{backgroundColor: "#858275"}}>This is the last column</Col>
    </Row>
  </Container>
)

const Default = ColStory.bind({})
Default.args = {}

const WithSize = ColStory.bind({})
WithSize.args = {
  md: {size: 3}
}

const WithOffset = ColStory.bind({})
WithOffset.args = {
  md: {size: 3, offset: 5}
}

const WithOrder = ColStory.bind({})
WithOrder.args = {
  md: {size: 3, order: "last"}
}

export {Default, WithSize, WithOffset, WithOrder}

export default meta
