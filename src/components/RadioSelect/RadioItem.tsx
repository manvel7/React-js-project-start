import React, {FunctionComponent, InputHTMLAttributes, ReactNode} from "react"
import HiddenInput from "./HiddenInput/HiddenInput"
import RadioItemWrapper from "./ItemWrapper"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  checked?: boolean
  error?: boolean
  disabled?: boolean
}

const RadioItem: FunctionComponent<IProps> = (props) => {
  const {label, checked, disabled, error} = props

  return (
    <RadioItemWrapper
      label={label}
      checked={checked}
      error={error}
      disabled={disabled}>
      <HiddenInput {...props} disabled={disabled} />
      <div className="radio-select__item" />
      {label && <span>{label}</span>}
    </RadioItemWrapper>
  )
}

export default RadioItem
