import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  
  handleInput = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  logUserIn = (e) => {
    e.preventDefault();
    (this.state.username === '' || this.state.password === '') ? alert('Wrong') : this.props.handleLogin(this.state.username, this.state.password)
  }
  render() {
    return (
      <form onSubmit={this.logUserIn}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInput} />
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
