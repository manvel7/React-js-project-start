import React, {FunctionComponent, HTMLAttributes, ReactNode} from "react"
import ToggleSwitchContainer from "./Container"
import HiddenCheckbox from "./HiddenCheckbox"
import VisibleSwitch from "./VisibleSwitch"

export interface IProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean
  disabled?: boolean
  error?: boolean
  label?: ReactNode
}

const ToggleSwitch: FunctionComponent<IProps> = (props) => {
  const {checked, disabled, label, error} = props

  return (
    <ToggleSwitchContainer>
      <HiddenCheckbox {...props} />
      <VisibleSwitch
        checked={checked}
        disabled={disabled}
        error={error}
        hasLabel={!!label}>
        <div className="toggle-switch__dot" />
      </VisibleSwitch>
      {label}
    </ToggleSwitchContainer>
  )
}

export default ToggleSwitch
