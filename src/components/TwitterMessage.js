import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      charsLeft: this.props.maxChars
    };
  }
  updateCount = () => {
    this.setState({charsLeft: this.props.maxChars - this.state.text.length})
  }

  clickHandler = event => {
    this.setState({
        text: event.target.value,
      },
      this.updateCount
    );
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.text}
          onChange = {this.clickHandler}
        />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
