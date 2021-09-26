import React from "react"
import {Meta, Story} from "@storybook/react/types-6-0"
import Alert, {IProps} from "./Alert"

const meta: Meta<IProps> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    onClose: {action: "onClose"}
  }
}

const AlertStory: Story<IProps> = (args) => <Alert {...args}>Alert</Alert>

const DefaultDismissibleAlert = AlertStory.bind({})
DefaultDismissibleAlert.args = {
  isDismissible: true
}

const InfoAlert = AlertStory.bind({})
InfoAlert.args = {
  variant: "info"
}

const SuccessAlert = AlertStory.bind({})
SuccessAlert.args = {
  variant: "success"
}

const WarningAlert = AlertStory.bind({})
WarningAlert.args = {
  variant: "warning"
}

const ErrorAlert = AlertStory.bind({})
ErrorAlert.args = {
  variant: "error"
}

export {
  DefaultDismissibleAlert,
  InfoAlert,
  SuccessAlert,
  WarningAlert,
  ErrorAlert
}

export default meta
