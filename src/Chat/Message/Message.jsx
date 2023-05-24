import React from 'react';
import "./Message.scss";

export default function Message({message, member}) {
    return(
            (message.member.id === member.id) ?
            (        
            <li className=' Message currentMember'>
                <div className='Message-text'>
                    <h2 className='text' style={{backgroundColor: message.member.clientData.color}}>{message.text}</h2>
                    <h4 className='username'>{message.member.clientData.username}</h4>
                </div>
            </li>
            ) :
            (        
            <li className=' Message'>
                <div className='Message-text'>
                    <h2 className='text' style={{backgroundColor: message.member.clientData.color}}>{message.text}</h2>
                    <h4 className='username'>{message.member.clientData.username}</h4>
                                    </div>
            </li>
            )
    );
}
