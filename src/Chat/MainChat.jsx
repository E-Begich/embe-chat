import React from "react";
import UserLogin from "../UserLogin/UserLogin";
import MessageList from "./MessageList";
import Header from "./ChatHeader";
import SendMessage from "./MessageSent";
import "./MainChat.scss";



let headerUserName = '';


function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class Chat extends React.Component {
  state = {
    messages: [],
    member: {
      username: '',
      color: '',
    }
  }

  handleOnUserLogin = (user) => {
    if (user !== ''){
      this.drone = new window.Scaledrone("ECYa3d96etFbZR4r", {
        data: {username: user, color: randomColor()}
      });
      
      headerUserName = user;
      console.log('User ' + user + ' logged in');
  
      this.drone.on('open', error => {
        if (error) {
          return console.error(error);
        }
        const member = {...this.state.member};
        member.id = this.drone.clientId;
        this.setState({member});
  
        console.log('Data succesfully loaded');
  
      });
      const room = this.drone.subscribe("observable-room");
      console.log('Room subscribed');

      room.on('data', (data, member) => {
        const messages = this.state.messages;
        messages.push({member, text: data});
        this.setState({messages});
  
        console.log('Message sent');
  
      });

    }
    else {
      console.log('Enter username');
    }
  }

  handleOnUserLogout = () => {
    this.setState({messages: [], member: {}});
    this.drone.close();

    console.log('User logged out');
  }

  render() {
    return (
        <div className="home">
          <Header 
          userName={headerUserName} 
          member={this.state.member} 
          logout={this.handleOnUserLogout} 
        />

         {
            (this.state.member.id) ? 
            (
                <div className="chatlist">
              <MessageList
                messages={this.state.messages}
                currentMember={this.state.member}
              />
              <SendMessage
                onSendMessage={this.onSendMessage}
                onUserLogout={this.handleOnUserLogout}
              />

            </div>
            ) :
            (
              <div>
                <div className='LoginImage'>
                  <div className='Logo'>
                  </div>
                </div>
                <UserLogin onUserLogin={this.handleOnUserLogin}/>
              </div>
            )
          }

      </div>

    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

}

export default Chat;