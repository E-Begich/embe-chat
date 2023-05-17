import React from 'react';
import "./MessageSent.scss";

class SendMessage extends React.Component {
  state = {
    text: ""
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text !== ''){
      this.props.onSendMessage(this.state.text);
      this.setState({text: ""});
      }
      else {
        console.log('Cannot be empty');
      }
  }
  
  onChange(e) {
    this.setState({text: e.target.value});
  }
  
  render() {
    return (
      <div className="Input" id='Input2'>
        <form className='Send-Message' onSubmit={e => this.onSubmit(e)}>
          <input
          id='messageText'
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message..."
            autoFocus={true}
          />
          <button id='buttonSend'>Send</button>
        </form>
      </div>
    );
  }  
}

export default SendMessage;