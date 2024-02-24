import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotification = () => {
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info-icon" />
      <div className="description-container">
        <h1 className="info-heading">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warn-icon" />
      <div className="description-container">
        <h1 className="warn-heading">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error-icon" />
      <div className="description-container">
        <h1 className="error-heading">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="check-icon" />
      <div className="description-container">
        <h1 className="success-heading">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="container">
      <div className="responsive-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}
export default AlertNotification
