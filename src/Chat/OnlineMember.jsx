import React from "react";
import "./OnlineMember.scss";
 const OnlineMember = (user) => {
    return (
        <div className="person">
        <div className="person_active" style={{ borderColor: user.color }}>
            <p>{user.name}</p>
        </div>
      </div>
    );
};
export default OnlineMember;