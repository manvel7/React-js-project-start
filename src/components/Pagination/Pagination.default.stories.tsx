import React, {useState} from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Pagination, {IProps} from "./Pagination"

const meta: Meta<IProps> = {
  title: "Components/Pagination/Default",
  component: Pagination,
  argTypes: {}
}

const PaginationStory: Story<IProps> = (args) => {
  const {currentPage, ...rest} = args
  const [page, setPage] = useState<number>(currentPage)

  const onChange = (page: number) => {
    setPage(page)
  }

  return <Pagination {...rest} currentPage={page} onPageChange={onChange} />
}

const Medium = PaginationStory.bind({})
Medium.args = {
  pageCount: 17,
  currentPage: 1
}

const Large = PaginationStory.bind({})
Large.args = {
  size: "lg",
  pageCount: 11,
  currentPage: 1
}

export {Medium, Large}

export default meta
