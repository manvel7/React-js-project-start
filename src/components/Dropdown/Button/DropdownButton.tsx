import React, {FunctionComponent} from "react"
import {faCaretDown} from "@fortawesome/pro-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Button from "../../Button"
import ButtonGroup from "../../ButtonGroup"
import {IProps as IDropdownProps} from "../Dropdown"

interface IProps extends IDropdownProps {
  isOpened: boolean
  onToggleOpen: () => void
}

const DropdownButton: FunctionComponent<IProps> = ({
  size,
  onButtonClick,
  onToggleOpen,
  title,
  isOpened
}) => (
  <ButtonGroup>
    <Button size={size} onClick={onButtonClick}>
      {title}
    </Button>
    <Button size={size} onClick={onToggleOpen}>
      <FontAwesomeIcon
        icon={faCaretDown}
        size="sm"
        rotation={isOpened ? 180 : undefined}
      />
    </Button>
  </ButtonGroup>
)

export default DropdownButton
