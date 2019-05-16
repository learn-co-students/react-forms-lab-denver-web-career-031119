import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  textChange = event => {
    // console.log(event.target.name)
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  submitHandler = event => {
    event.preventDefault()
    // console.log(this.state)
    // console.log(this.state.username, this.state.password)
    if (this.state.username && this.state.password) {
        this.props.handleLogin(this.state)
    }
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username}
            onChange={this.textChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password}
            onChange={this.textChange}
            />
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
