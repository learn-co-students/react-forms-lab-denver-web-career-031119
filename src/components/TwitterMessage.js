import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      remainingChars: props.maxChars
    };
  }

  handleInput = (e) => {
    // const newRemainingValue;
    const {name, value} = e.target;
    // e.key === 'delete' ? newRemainingValue = this.state.remainingChars - 1 : newRemainingValue = this.state.remainingChars + 1
    const newRemainingValue = this.state.remainingChars - 1
    this.setState({
      [name]: value,
      remainingChars: newRemainingValue
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleInput}/>
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
