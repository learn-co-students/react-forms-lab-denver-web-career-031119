import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: ''};
  }

  handleOnChange = event => {
    const message = event.target.value
    this.setState({message: message})
  }

  charsLeft = () => {
    return  <p> You have {this.props.maxChars - this.state.message.length} characters left.</p>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleOnChange} />
        {this.charsLeft()}
      </div>
    );
  }
}

export default TwitterMessage;
