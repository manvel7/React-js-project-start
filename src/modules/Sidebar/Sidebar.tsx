import React, {
  FunctionComponent,
  ComponentType,
  HTMLAttributes,
  useState,
  MouseEvent
} from "react"
import clsx from "clsx"
import SidebarDivider from "./SidebarDivider"
import SidebarItem from "./SidebarItem"
import SidebarWrapper from "./SidebarWrapper"

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  ToggleIcon: ComponentType
  activeAppName?: string
}

const Sidebar: FunctionComponent<IProps> = (props) => {
  const {children, activeAppName, ToggleIcon} = props
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const onMenuToggle = () => {
    setIsExpanded((prev) => !prev)
  }

  const sidebarItems = React.Children.map(children, (item: any) => {
    if (
      typeof item !== "object" ||
      (item.type !== SidebarItem && item.type !== SidebarDivider)
    ) {
      throw new TypeError(
        "Sidebar children should only contain SidebarItem and SidebarDivider elements"
      )
    }

    if (item.type === SidebarDivider) {
      return item
    }

    return React.cloneElement(item, {
      className: clsx(item.props.className),
      onClick(event: MouseEvent<HTMLDivElement>) {
        setIsExpanded(false)

        if (item.props.onClick) {
          item.props.onClick(event)
        }
      }
    })
  })

  return (
    <SidebarWrapper
      className={clsx({
        expanded: isExpanded
      })}>
      <div className="mobile-heading">
        <div className="burger-button" onClick={onMenuToggle}>
          <ToggleIcon />
        </div>
        <h4>{activeAppName}</h4>
      </div>
      {sidebarItems}
    </SidebarWrapper>
  )
}

Sidebar.defaultProps = {
  activeAppName: "Linda Forest"
}

export default Sidebar
