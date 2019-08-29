import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange=(event)=>{
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  prevent = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.state.username.length !== 0 && this.state.password.length !== 0 ? this.props.handleLogin : this.prevent}>
        <div>
          <label>
            Username
            <input onChange={this.handleInputChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInputChange} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
