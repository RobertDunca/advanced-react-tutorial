import React from "react";
import avatar from "../../../assets/default-avatar.svg";

const Person = ({ name, images, nickName = "No nickname" }) => {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div style={{ border: "1px solid black" }}>
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
      <img height={50} src={img} alt="" />
    </div>
  );
};
export default Person;
