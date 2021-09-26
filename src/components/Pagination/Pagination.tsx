import React, {FunctionComponent, HTMLAttributes, useMemo} from "react"
import {faAngleLeft, faAngleRight} from "@fortawesome/pro-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import _ from "lodash"
import Button from "../Button"
import PaginationButton from "./Button"
import {ButtonVariant} from "./Button/PaginationButton"
import PaginationWrapper from "./PaginationWrapper"

export type PaginationSize = "md" | "lg"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  size?: PaginationSize
  currentPage: number
  pageCount: number
  onPageChange?: (page: number) => void
  variant?: ButtonVariant
  hidePageNumber?: boolean
}

const HALF_RANGE = 2
const FIRST_PAGES_COUNT = 5
const LAST_PAGES_OFFSET = 4
const ELLIPSIS_OFFSET = 4
const FIRST_LAST_PAGE_OFFSET = 3
const ELLIPSIS_SKIP = 5
const FIRST_LAST_PAGE_VISIBLE = 5

const Pagination: FunctionComponent<IProps> = (props) => {
  const {
    currentPage,
    pageCount,
    onPageChange,
    size,
    variant,
    hidePageNumber
  } = props

  const onPreviousClick = () => {
    if (onPageChange) {
      onPageChange(currentPage - 1)
    }
  }

  const onNextClick = () => {
    if (onPageChange) {
      onPageChange(currentPage + 1)
    }
  }

  const setPage = (page: number) => () => {
    if (onPageChange) {
      if (page < 1) {
        onPageChange(1)
      } else if (page > pageCount) {
        onPageChange(pageCount)
      } else {
        onPageChange(page)
      }
    }
  }

  const pages = useMemo<number[]>(() => {
    if (currentPage <= HALF_RANGE) {
      return _.range(1, _.min([FIRST_PAGES_COUNT + 1, pageCount + 1]))
    }

    if (currentPage > pageCount - HALF_RANGE) {
      return _.range(
        _.max([1, pageCount - LAST_PAGES_OFFSET]) || 1,
        pageCount + 1
      )
    }

    return _.range(currentPage - HALF_RANGE, currentPage + HALF_RANGE + 1)
  }, [currentPage, pageCount])

  return (
    <PaginationWrapper>
      <Button
        className={clsx({hidden: currentPage === 1})}
        onClick={onPreviousClick}
        variant="text"
        size={size}>
        <FontAwesomeIcon icon={faAngleLeft} style={{marginRight: "0.8rem"}} />
        Previous
      </Button>
      {pageCount > FIRST_LAST_PAGE_VISIBLE && (
        <>
          {currentPage > FIRST_LAST_PAGE_OFFSET && (
            <PaginationButton
              onClick={setPage(1)}
              size={size}
              variant={variant}>
              1
            </PaginationButton>
          )}
          {currentPage > ELLIPSIS_OFFSET && (
            <PaginationButton
              onClick={setPage(currentPage - ELLIPSIS_SKIP)}
              size={size}
              variant={variant}>
              &hellip;
            </PaginationButton>
          )}
        </>
      )}
      {pages.map((page) => (
        <PaginationButton
          key={page}
          isActive={page === currentPage}
          disabled={page === currentPage}
          onClick={setPage(page)}
          size={size}
          variant={variant}>
          {!hidePageNumber && page}
        </PaginationButton>
      ))}
      {pageCount > FIRST_LAST_PAGE_VISIBLE && (
        <>
          {currentPage <= pageCount - ELLIPSIS_OFFSET && (
            <PaginationButton
              onClick={setPage(currentPage + ELLIPSIS_SKIP)}
              size={size}
              variant={variant}>
              &hellip;
            </PaginationButton>
          )}
          {currentPage <= pageCount - FIRST_LAST_PAGE_OFFSET && (
            <PaginationButton
              onClick={setPage(pageCount)}
              size={size}
              variant={variant}>
              {pageCount}
            </PaginationButton>
          )}
        </>
      )}
      <Button
        className={clsx({hidden: currentPage === pageCount})}
        onClick={onNextClick}
        variant="text"
        size={size}>
        Next
        <FontAwesomeIcon icon={faAngleRight} style={{marginLeft: "0.8rem"}} />
      </Button>
    </PaginationWrapper>
  )
}

Pagination.defaultProps = {
  size: "md",
  variant: "normal",
  hidePageNumber: false
}

export default Pagination
