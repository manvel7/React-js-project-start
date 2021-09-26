import React, {FunctionComponent, InputHTMLAttributes, ReactNode} from "react"
import Input from "./Input"
import Label from "./Label"

export type TextInputSize = "xs" | "sm" | "md" | "lg"

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  displaySize?: TextInputSize
  label?: ReactNode
  disabled?: boolean
  placeholder?: string
  id: string
}

const TextInput: FunctionComponent<IProps> = (props) => {
  const {
    displaySize,
    label,
    disabled,
    placeholder,
    className,
    id,
    value,
    onChange,
    ...rest
  } = props
  const disabledValue = disabled || false

  return (
    <div className={className} {...rest}>
      <Label displaySize={displaySize} disabled={disabledValue} htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        displaySize={displaySize}
        disabled={disabledValue}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}

export default TextInput
