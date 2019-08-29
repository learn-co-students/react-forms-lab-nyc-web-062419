import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: "" };
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.name);
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <h1>{this.props.maxChars - this.state.message.length}</h1>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.changeHandler(event)}
          value={this.state.message}
        />
      </div>
    );
  }
}

export default TwitterMessage;
