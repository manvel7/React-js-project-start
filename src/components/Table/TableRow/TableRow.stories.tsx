import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Table from "../index"
import TableBody from "../TableBody"
import TableCell from "../TableCell/index"
import TableRow, {IProps} from "./TableRow"

const meta: Meta<IProps> = {
  title: "Components/Table/Row",
  component: TableRow,
  argTypes: {}
}

const TableRowStory: Story<IProps> = (args) => (
  <Table>
    <TableBody>
      <TableRow {...args}>
        <TableCell>Spruce</TableCell>
        <TableCell>290</TableCell>
        <TableCell>29</TableCell>
        <TableCell>234</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

const Regular = TableRowStory.bind({})
Regular.args = {}

const Disabled = TableRowStory.bind({})
Disabled.args = {
  disabled: true
}

export {Regular, Disabled}

export default meta
