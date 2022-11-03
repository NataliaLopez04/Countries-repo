import React, { useReducer } from "react";

const Name = ({ user }) => {
  return (
    <div>
      {user.name.title} {user.name.first} {user.name.last}
      <img src={user.picture.large} alt="" />
    </div>
  );
};

export default Name;
