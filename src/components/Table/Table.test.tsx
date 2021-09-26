import React from "react"
import {render} from "@testing-library/react"
import {UiProvider} from "../../styles"
import Table from "./Table"
import TableBody from "./TableBody"
import TableCell from "./TableCell"
import TableHead from "./TableHead"
import TableHeadCell from "./TableHeadCell"
import TableRow from "./TableRow"

describe("Table", () => {
  describe("Regular", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Table>
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
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })

  describe("Striped", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <Table striped={true}>
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
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
