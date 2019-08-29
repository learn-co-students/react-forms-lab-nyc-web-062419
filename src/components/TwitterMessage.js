import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      message: ""
    };
  }
  
  render() {
    // console.log("STATE MESSAGE", this.state.message)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.setState({message: e.target.value})} value={this.state.message}/>
        <p>{this.props.maxChars - this.state.message.length} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
