import React, { Component } from 'react'
import * as displayTexts from '../AccountSummaryTexts'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import Input from '../../Common/UI/Input/Input'
import Button from '../../Common/UI/Button/Button'
import validator from 'validator'
import Spinner from '../../Common/UI/Spinner/Spinner'

export class AccountSummarySubscriptionForm extends Component {
  state = {
    form: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        validation: {
          required: true,
          emailCheck: true
        },
        value: '',
        touched: false,
        valid: false
      },
      formIsValid: false
    },
    address: null,
    frequency: 'daily',
    render: false,
    toastId: '1',
    displayMsg: displayTexts.LOADING_SUBSCRIPTION_DATA
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('[SummarySubscriptionForm] componentWillReceive props ')
    this.setState({
      ...this.state,
      address: nextProps.userData.address
    })
  }

  componentDidMount() {
    console.log('[SummarySubscriptionForm] componentDidMount')
    this.setState({
      address: this.props.userData.address,
      render: true
    })
  }

  onSubmitBtnHandler = async event => {
    event.preventDefault()
    console.log('[SummarySubscriptionForm] submit btnHandler')
    let data = {
      address: this.state.address,
      frequency: this.state.frequency,
      email: this.state.form.email.value
    }
    this.setState(
      {
        render: false,
        displayMsg: displayTexts.GENERATING_SUBSCRIPTION
      },
      async () => {
        await this.generateSubscription(data, () => {
          this.props.history.push('/account')
        })
      }
    )
  }

  generateSubscription = async (data, callback) => {
    let response
    try {
      console.log('Creating new subscriber with data: ', data)
      response = await axios.post('', data)
      let userEmail = this.state.form.email.value
      this.setState(
        {
          userData: {
            ...this.props.userData,
            activated: response.data.activated,
            id: response.data._id,
            activatedCode: response.data.activated,
            createdAt: response.data.createdAt,
            isSubscribed: true
          },
          render: false,
          error: false,
          displayMsg: displayTexts.WELCOME_NEW_SUBSCRIBER + userEmail
        },
        () => {
          this.sendToast(null, callback)
        }
      )
    } catch (exception) {
      console.log('[AccountSummary.js] exception on postSubscription')
      let responseMsg = exception.response.data.message
      let displayMsg
      /** Email already exists **/
      if (responseMsg && responseMsg === displayTexts.FAIL_EMAIL_ALREADY_EXISTS_RESPONSE) {
        displayMsg = displayTexts.EMAIL_ALREADY_EXISTS
      } else {
        displayMsg = displayTexts.FAIL_NO_REASON
      }
      this.setState(
        {
          render: true,
          displayMsg: displayMsg,
          error: true
        },
        () => {
          this.sendToast()
        }
      )
    }
  }

  sendToast = (toastTime, callback) => {
    let time = 2000
    if (toastTime) {
      time = toastTime
    }
    let displayMsg = this.state.displayMsg

    if (!toast.isActive(this.state.toastId)) {
      if (this.state.error) {
        toast.error(displayMsg, {
          position: toast.POSITION.TOP_RIGHT,
          progressClassName: 'Toast-progress-bar',
          autoClose: time,
          toastId: this.state.toastId,
          onClose: callback
        })
      } else {
        toast.success(displayMsg, {
          position: toast.POSITION.TOP_RIGHT,
          progressClassName: 'Toast-progress-bar',
          autoClose: time,
          toastId: this.state.toastId,
          onClose: callback
        })
      }
    }
  }

  checkValidity = (value, rules) => {
    let isValid = true
    if (!rules) {
      return true
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }
    if (rules.emailCheck) {
      isValid = validator.isEmail(value) && isValid
    }
    return isValid
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form
    }
    const updatedFormElement = {
      ...updatedForm[inputIdentifier],
      value: event.target.value
    }
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    )
    updatedFormElement.touched = true
    updatedForm[inputIdentifier] = updatedFormElement

    let formIsValid = true
    formIsValid = updatedForm[inputIdentifier].valid && formIsValid
    updatedForm.formIsValid = formIsValid
    this.setState({ form: updatedForm })
  }

  render() {
    let content = (
      <>
        <h3>{this.state.displayMsg}</h3>
        <Spinner />
      </>
    )
    if (this.state.render) {
      content = (
        <>
          <h1>Welcome to subscription form</h1>
          <form onSubmit={this.onSubmitBtnHandler}>
            <Input
              elementType={this.state.form.email.elementType}
              elementConfig={this.state.form.email.elementConfig}
              value={this.state.form.email.value}
              invalid={!this.state.form.email.valid}
              shouldValidate={this.state.form.email.validation}
              touched={this.state.form.email.touched}
              changed={event => this.inputChangedHandler(event, 'email')}
            />
            <Button
              btnType="Success"
              disabled={!this.state.form.formIsValid}
              class="subscriptionBtn"
            >
              Subscribe
            </Button>
          </form>
        </>
      )
    }
    return (
      <div>
        {content}
        <ToastContainer autoClose={3000} />
      </div>
    )
  }
}
