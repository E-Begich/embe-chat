import React from 'react';
import "./Message.scss";

export default function Message({message, member}) {
    return(
            (message.member.id === member.id) ?
            (        
            <li className=' Messages-message currentMember'>
                <div className='Message-content'>
                    <h2 className='text' style={{backgroundColor: message.member.clientData.color}}>{message.text}</h2>
                    <h4 className='username'>{message.member.clientData.username}</h4>
                </div>
            </li>
            ) :
            (        
            <li className=' Messages-message'>
                <div className='Message-content'>
                    <h2 className='text' style={{backgroundColor: message.member.clientData.color}}>{message.text}</h2>
                    <h4 className='username'>{message.member.clientData.username}</h4>
                                    </div>
            </li>
            )
    );
}
