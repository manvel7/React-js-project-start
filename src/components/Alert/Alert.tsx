import React, {FunctionComponent, HTMLAttributes, useState} from "react"
import {faTimes} from "@fortawesome/pro-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import AlertStyledComponent, {AlertVariant} from "./AlertStyledComponent"
import CloseButton from "./CloseButton"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  isDismissible?: boolean
  variant?: AlertVariant
  onClose?: () => void
}

const Alert: FunctionComponent<IProps> = (props) => {
  const [dismissed, setDismissed] = useState(false)
  const {isDismissible, children, variant, onClose} = props

  const handleClose = () => {
    setDismissed(true)
    if (onClose) {
      onClose()
    }
  }

  return (
    <AlertStyledComponent
      role="alert"
      className={dismissed ? "hidden" : ""}
      isDismissible={isDismissible || false}
      variant={variant}>
      <div>{children}</div>
      {isDismissible ? (
        <CloseButton onClick={handleClose} variant={variant}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
      ) : null}
    </AlertStyledComponent>
  )
}

export default Alert
