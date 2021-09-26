import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  createElement
} from "react"
import TooltipTrigger, {TooltipTriggerProps} from "react-popper-tooltip"
import TooltipArrow from "./Arrow"
import TooltipContainer from "./Container"

export interface IProps
  extends HTMLAttributes<HTMLDivElement>,
    Partial<
      Omit<TooltipTriggerProps, "children" | "onVisibilityChange" | "tooltip">
    > {
  content: ReactNode
}

const Tooltip: FunctionComponent<IProps> = (props) => {
  const {
    children,
    content,
    tooltipShown,
    placement,
    trigger,
    delayHide,
    followCursor,
    defaultTooltipShown
  } = props

  if (Children.count(children) > 1) {
    throw new Error("Tooltip children should contain only 1 element")
  }

  let reference: ReactNode =
    (Array.isArray(children) ? children[0] : children) || createElement("span")

  if (typeof reference === "string") {
    reference = createElement("span", {}, reference)
  }

  return (
    <TooltipTrigger
      tooltipShown={tooltipShown}
      trigger={trigger}
      placement={placement}
      delayHide={delayHide}
      followCursor={followCursor}
      defaultTooltipShown={defaultTooltipShown}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 10]
          }
        }
      ]}
      tooltip={({
        arrowRef,
        tooltipRef,
        getArrowProps,
        getTooltipProps,
        placement
      }) => (
        <TooltipContainer
          {...getTooltipProps({
            ref: tooltipRef
          })}>
          <TooltipArrow
            {...getArrowProps({
              ref: arrowRef,
              "data-placement": placement
            })}
          />
          {content}
        </TooltipContainer>
      )}>
      {({getTriggerProps, triggerRef}) =>
        cloneElement(
          isValidElement(reference) ? reference : createElement("span"),
          {
            ...getTriggerProps({
              ref: triggerRef
            })
          }
        )
      }
    </TooltipTrigger>
  )
}

Tooltip.defaultProps = {
  placement: "bottom",
  delayHide: 200
}

export default Tooltip
