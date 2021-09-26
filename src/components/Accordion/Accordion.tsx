import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  useState
} from "react"
import AccordionContent from "./AccordionContent"
import AccordionLabel from "./AccordionLabel"
import AccordionWrapper from "./AccordionWrapper"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  label?: ReactNode
}

const Accordion: FunctionComponent<IProps> = (props) => {
  const {label, children, ...rest} = props
  const [isActive, setIsActive] = useState(props.isActive)

  return (
    <AccordionWrapper isActive={isActive} {...rest}>
      <AccordionLabel
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}>
        {label}
      </AccordionLabel>
      <AccordionContent isActive={isActive}>{children}</AccordionContent>
    </AccordionWrapper>
  )
}

export default Accordion
