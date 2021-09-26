import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Table, {IProps} from "./Table"
import TableBody from "./TableBody"
import TableCell from "./TableCell"
import TableHead from "./TableHead"
import TableHeadCell from "./TableHeadCell"
import TableRow from "./TableRow"

const meta: Meta<IProps> = {
  title: "Components/Table",
  component: Table,
  argTypes: {}
}

const TableStory: Story<IProps> = (args) => (
  <Table {...args}>
    <TableHead>
      <TableRow>
        <TableHeadCell>Species</TableHeadCell>
        <TableHeadCell>Log (m3/ha)</TableHeadCell>
        <TableHeadCell>Average height (m)</TableHeadCell>
        <TableHeadCell>Average diameter (cm)</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Spruce</TableCell>
        <TableCell>290</TableCell>
        <TableCell>29</TableCell>
        <TableCell>234</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Dedicious</TableCell>
        <TableCell>329</TableCell>
        <TableCell>32</TableCell>
        <TableCell>329</TableCell>
      </TableRow>
      <TableRow disabled={true}>
        <TableCell>Spruce</TableCell>
        <TableCell>290</TableCell>
        <TableCell>29</TableCell>
        <TableCell>234</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

const Regular = TableStory.bind({})
Regular.args = {}

const Striped = TableStory.bind({})
Striped.args = {
  striped: true
}

export {Regular, Striped}

export default meta
