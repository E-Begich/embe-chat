import React from 'react';
import "./MessageSent.scss";

class MessageSent extends React.Component {
  state = {
    text: "",
    error: "",
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text !== ''){
      this.props.onSendMessage(this.state.text);
      this.setState({text: "", error: null});
      }
      else {
        //console.log('Cannot be empty');
        this.setState({error: "Cannot be empty"});
      }
  }
  
  onChange(e) {
    this.setState({text: e.target.value});
  }
  
  render() {
    return (
      <div className="Input" id='Input2'> 
        <form className='Send-Message' onSubmit={e => this.onSubmit(e)}>
            <div className="error2">{this.state.error}</div> 
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

export default MessageSent;