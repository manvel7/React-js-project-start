import React, {
  ChangeEvent,
  Children,
  cloneElement,
  FunctionComponent,
  HTMLAttributes,
  useState
} from "react"
import RadioItem from "./RadioItem"
import RadioSelectWrapper from "./Wrapper"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  onValueChange?: (value: string) => void
  error?: boolean
  disabled?: boolean
}

const RadioSelect: FunctionComponent<IProps> = (props) => {
  const {children, disabled, onValueChange, error, ...rest} = props
  const [value, setValue] = useState<string>()

  const items = Children.map(children, (item: any, index) => {
    if (typeof item !== "object" || item.type !== RadioItem) {
      throw new TypeError(
        "RadioSelect children should only contain RadioItem elements"
      )
    }

    const {value: itemValue} = item.props

    return cloneElement(item, {
      onChange(event: ChangeEvent<HTMLInputElement>) {
        const {target} = event

        setValue(target.value)

        if (onValueChange) {
          onValueChange(target.value)
        }
      },
      checked: (itemValue || index.toString()) === value,
      value: itemValue || index.toString(),
      error,
      disabled
    })
  })

  return <RadioSelectWrapper {...rest}>{items}</RadioSelectWrapper>
}

export default RadioSelect
