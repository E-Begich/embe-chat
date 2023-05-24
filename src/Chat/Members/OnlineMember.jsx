import React from "react";
import "./OnlineMember.scss";

  const OnlineMember = (user) => {
    return (
        <li id="member">
          <div id="member-active" style={{ backgroundColor: user.color }}>
            {user.name}
          </div>
        </li>
      );
};
export default OnlineMember;