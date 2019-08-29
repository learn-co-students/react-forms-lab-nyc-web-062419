import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.maxChars)
    this.state = { message: "" };
  }

  handleMessage = event => {
    console.log(this.state)
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charactersLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessage(event)} value={this.state.message} />
        <h2>{charactersLeft} characters are remaining in your tweet</h2>
      </div>
    );
  }
}

export default TwitterMessage;


