import React, { Component } from "react"

class Alerts extends Component {

  render() {
    return(
      <div className={this.props.submitted ? 'alert alert-ok' : "alert alert-error"} >
        <ul>
          {
            this.props.messages.map((msg, idx) => {
              return(
                <li>{ msg }</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Alerts
