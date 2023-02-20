import React from "react";
import ButtonComponent from "./ButtonComponent";
const list = [
  "All",
  "Gaming",
  "Songs",
  "Cricket",
  "News",
  "Soccer",
  "Valentines",
  "CSGO",
  "Valorant",
  "India",
  "Turkey",
  "Music",
  
];
const ButtonList = () => {
  return (
    <div className="flex flex-nowrap">
      {list.map((category, index) => {
        return <ButtonComponent key={index} name={category} />;
      })}
    </div>
  );
};

export default ButtonList;
