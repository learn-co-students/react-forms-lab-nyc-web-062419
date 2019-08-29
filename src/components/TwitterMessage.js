import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetInput: ""
    };
  }
  handleInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      tweetInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInputChange} type="text" name="message" id="message" value={this.state.tweetInput}/>
        <p>Characters left: {this.props.maxChars - this.state.tweetInput.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
