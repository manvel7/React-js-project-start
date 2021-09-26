import React, {
  FunctionComponent,
  HTMLAttributes,
  MouseEvent,
  useState
} from "react"
import clsx from "clsx"
import Button from "../Button"
import ButtonGroup from "../ButtonGroup"

export type ToggleButtonSize = "sm" | "md"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  initialActive?: number
  size?: ToggleButtonSize
  onActiveChange?: (activeIndex: number) => void
}

const Toggle: FunctionComponent<IProps> = (props) => {
  const {children, initialActive, size, onActiveChange} = props

  const [activeIndex, setActiveIndex] = useState<number>(initialActive || 0)

  const buttons = React.Children.map(children, (button: any, index) => {
    if (typeof button !== "object" || button.type !== Button) {
      throw new TypeError("Toggle children should only contain Button elements")
    }

    return React.cloneElement(button, {
      className: clsx(button.props.className, {
        "toggle__button--active": activeIndex === index,
        "toggle__button--inactive": activeIndex !== index
      }),
      onClick(event: MouseEvent<HTMLButtonElement>) {
        setActiveIndex(index)

        if (onActiveChange) {
          onActiveChange(index)
        }

        if (button.props.onClick) {
          button.props.onClick(event)
        }
      },
      variant: activeIndex !== index ? "outlined" : "default",
      size
    })
  })

  return <ButtonGroup>{buttons}</ButtonGroup>
}

export default Toggle
