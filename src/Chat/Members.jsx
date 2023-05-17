import React from 'react';

const Members = (member) => {
    return (
        <div className='active-members'>
            <p>Who is here:</p>
            <p className='member-info' >
                {member.username}
            </p>
        </div>

    );

}
export default Members;