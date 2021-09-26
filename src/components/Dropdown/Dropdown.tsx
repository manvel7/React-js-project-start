import React, {
  FunctionComponent,
  HTMLAttributes,
  MouseEventHandler,
  TransitionEvent,
  useEffect,
  useState
} from "react"
import {ButtonSize} from "../Button/Button"
import DropdownButton from "./Button"
import DropdownMenu from "./Menu"
import DropdownWrapper from "./Wrapper"

export type DisplayType = "block" | "none"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  size?: ButtonSize
  title: string
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
  onToggleClick?: () => void
}

const Dropdown: FunctionComponent<IProps> = (props) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [display, setDisplay] = useState<DisplayType>("none")
  const {children, size, title, onButtonClick, onToggleClick} = props

  const open = async () => {
    if (onToggleClick) {
      await onToggleClick()
    }

    setDisplay("block")
  }

  const onToggleOpen = () => {
    if (isOpened) {
      setIsOpened(false)
    } else {
      open()
    }
  }

  const onTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName === "opacity" && !isOpened) {
      setDisplay("none")
    }
  }

  useEffect(() => {
    if (display === "block") {
      setIsOpened(true)
    }
  }, [display])

  return (
    <DropdownWrapper>
      <DropdownButton
        isOpened={isOpened}
        onToggleOpen={onToggleOpen}
        title={title}
        size={size}
        onButtonClick={onButtonClick}
      />
      <DropdownMenu
        isOpened={isOpened}
        displayValue={display}
        onTransitionEnd={onTransitionEnd}>
        {children}
      </DropdownMenu>
    </DropdownWrapper>
  )
}

export default Dropdown
