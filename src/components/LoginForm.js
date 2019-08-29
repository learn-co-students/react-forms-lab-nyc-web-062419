import React from "react";


class LoginForm extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {username: "", password:"" };
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username.length >= 1 & this.state.password.length >= 1)
    this.props.handleLogin({username: this.state.username, password: this.state.password})
    else alert("username & password needed")
  }

  handleInputChange = event =>{ 
  this.setState({[event.target.name]: event.target.value })
  console.log(event.target)

}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
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
