import React, {useState} from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Pagination, {IProps} from "./Pagination"

const meta: Meta<IProps> = {
  title: "Components/Pagination/Circle",
  component: Pagination,
  argTypes: {}
}

const PaginationStory: Story<IProps> = (args) => {
  const {currentPage, ...rest} = args
  const [page, setPage] = useState<number>(currentPage)

  const onChange = (page: number) => {
    setPage(page)
  }

  return (
    <Pagination
      {...rest}
      variant="circle"
      currentPage={page}
      onPageChange={onChange}
    />
  )
}

const Medium = PaginationStory.bind({})
Medium.args = {
  pageCount: 7,
  currentPage: 1
}

const Large = PaginationStory.bind({})
Large.args = {
  size: "lg",
  pageCount: 3,
  currentPage: 1
}

const WithoutNumbers = PaginationStory.bind({})
WithoutNumbers.args = {
  pageCount: 3,
  currentPage: 1,
  hidePageNumber: true
}

export {Medium, Large, WithoutNumbers}

export default meta
