// Write your code here
import './index.css'

import {Component} from 'react'

const statusContain = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  register: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  getInitialData = () => (
    <div className="status-container">
      <p>Click on an event, to view its registration details </p>
    </div>
  )

  getYetToRegister = () => (
    <div className="yet-register-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="reg-button">
        Register Here
      </button>
    </div>
  )

  getRegister = () => (
    <div className="yet-register-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered"
      />
      <h1 className="para font-sizes">
        You have already Registered for the event
      </h1>
    </div>
  )

  getRegistrationClosed = () => (
    <div className="yet-register-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="register-closed"
      />
      <h1 className="reg-closed-heading">Registrations Are Closed Now!</h1>
      <p className="para">Stay tuned. We will reopen the registration soon!</p>
    </div>
  )

  getStatusData = () => {
    const {activeDetails} = this.props

    switch (activeDetails) {
      case statusContain.initial:
        return this.getInitialData()
      case statusContain.yetToRegister:
        return this.getYetToRegister()
      case statusContain.register:
        return this.getRegister()
      case statusContain.registrationClosed:
        return this.getRegistrationClosed()
      default:
        return null
    }
  }

  render() {
    //  const {activeDetails} = this.props

    return <>{this.getStatusData()}</>
  }
}

export default ActiveEventRegistrationDetails
