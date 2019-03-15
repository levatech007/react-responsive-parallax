import React, { Component } from "react"

class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
                    name:          "",
                    email:         "",
                    message:       "",
                    formSubmitted: false,
                    showAlert:     false,
                    alertMessages: [],
                }
    this.handleInputChange  = this.handleInputChange.bind(this)
    this.validateFormFields = this.validateFormFields.bind(this)
    this.onFormSubmit       = this.onFormSubmit.bind(this)
  }

  handleInputChange(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  validateFormFields() {
    // basic form validations:
    let alertMessages = []
    let formIsValid = true
    if (this.state.name) {
      formIsValid = false
      alertMessages.push("Name must be included.")
    }
    const validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!validEmailPattern.test(this.state.email)) {
      formIsValid = false
      alertMessages.push("Email is not valid.")
    }
    if (this.state.message.length) {
      formIsValid = false
      alertMessages.push("Message must be included.")
    }
    formIsValid ? null : alertMessages.unshift("The following errors occured:")

    this.setState({
      alertMessages: alertMessages
    })
    return formIsValid
  }

  onFormSubmit(e) {
    e.preventDefault()
    if (this.validateFormFields()) {
      this.setState({
        alert: true,
        alertMessages: ["Thank you! Your message has been sent!"],
        formSubmitted: true,
      })
      // submit form:

    } else {
      this.setState({
        alert: true,
      })
    }
  }

  render() {
    return(
      <section>
        <h1>Contact</h1>
          <div>
            { this.state.showAlert ? <Alert messages={ this.state.alertMessages } submitted={ this.state.formSubmitted } /> : null }
          </div>
            <form onSubmit={ this.onFormSubmit }>
              <div>
                <div className="col-25">
                  <label>Name <span className="red-text">*</span></label>
                </div>
                <div className="col-75">
                  <input
                    name="name"
                    type="text"
                    required="required"
                    placeholder="Your name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
                  />
                </div>
              </div>
            </form>
      </section>
    )
  }
}

export default ContactForm;
