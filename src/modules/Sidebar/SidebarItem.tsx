import React, {FunctionComponent, ReactNode} from "react"
import SidebarItemWrapper, {
  IProps as IWrapperProps
} from "./ItemWrapper/SidebarItemWrapper"

interface IProps extends IWrapperProps {
  icon: ReactNode
  title?: string
}

const SidebarItem: FunctionComponent<IProps> = (props) => {
  const {icon, title, ...rest} = props

  return (
    <SidebarItemWrapper {...rest}>
      <div className="icon">{icon}</div>
      {title && (
        <div className="text">
          <h6>{title}</h6>
        </div>
      )}
    </SidebarItemWrapper>
  )
}

export default SidebarItem
