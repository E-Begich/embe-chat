import React from "react";
import UserLogin from "../UserLogin/UserLogin";
import MessageList from "./Message/MessageList";
import Header from "./Header/ChatHeader";
import MessageSent from "./Message/MessageSent";
import OnlineMember from "./Members/OnlineMember";
import "./MainChat.scss";



let headerUserName = '';


function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class Chat extends React.Component {
  state = {
    messages: [],
    members:[],
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
        messages.push({member, text: data });
        this.setState({messages});
  
        console.log('Message sent');
  
      });
       room.on('members', (members) => {
       this.setState({members});
       })
       room.on("member_join", (member) => {
        const memberList = this.state.members;
        memberList.push(member);
        this.setState({ members: memberList });
      });
      room.on("member_leave", (member) => {
        const memberLeave = this.state.members.filter(
          (memberState) => memberState.id !== member.id
        );
        this.setState({ members: memberLeave });
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
      <div id="Home">
        <Header 
          userName={headerUserName} 
          member={this.state.member} 
          logout={this.handleOnUserLogout} 
        />
         {
            (this.state.member.id) ? 
            (
            <div>
              <div id="active_members">
                <p id="online">Who is online:</p>
              <ul>
               {this.state.members.map((member) => {
              return (
                <OnlineMember
                  key={member.id}
                  name={member.clientData.username}
                  color={member.clientData.color}
                />
              );
            })}
            </ul>
            </div>
              <MessageList
                messages={this.state.messages}
                currentMember={this.state.member}
              />
              <MessageSent
                onSendMessage={this.onSendMessage}
                onUserLogout={this.handleOnUserLogout}
              />
            </div>
            ) :
            (

                <UserLogin onUserLogin={this.handleOnUserLogin}/>

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