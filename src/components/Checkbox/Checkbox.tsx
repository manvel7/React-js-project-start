import React, {FunctionComponent, HTMLAttributes, ReactNode} from "react"
import {faCheckSquare, faMinusSquare} from "@fortawesome/pro-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import CheckboxContainer from "./CheckboxContainer"
import HiddenCheckbox from "./HiddenCheckbox"
import VisibleCheckbox from "./VisibleCheckbox"

export type CheckboxVariant = "default" | "dashed"

export interface IProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean
  disabled?: boolean
  label?: ReactNode
  variant?: CheckboxVariant
}

const Checkbox: FunctionComponent<IProps> = (props) => {
  const {checked, label, disabled, variant, className, ...rest} = props

  return (
    <CheckboxContainer disabled={disabled} className={className}>
      <HiddenCheckbox checked={checked} disabled={disabled} {...rest} />
      <VisibleCheckbox checked={checked} disabled={disabled}>
        <FontAwesomeIcon
          icon={variant === "dashed" ? faMinusSquare : faCheckSquare}
        />
      </VisibleCheckbox>
      {label}
    </CheckboxContainer>
  )
}

Checkbox.defaultProps = {
  onChange: () => undefined
}

export default Checkbox
