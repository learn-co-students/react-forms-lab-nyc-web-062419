import React from "react"

class TwitterMessage extends React.Component {
  state = { message: "" }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={event => this.setState({ message: event.target.value })}
        />
        {this.props.maxChars - this.state.message.length}
      </div>
    )
  }
}

export default TwitterMessage
