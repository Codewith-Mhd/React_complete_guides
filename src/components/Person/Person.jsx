import React from "react";
import Radium, { StyleRoot } from "radium";
import "./Person.css";

const person = ({ name, age, children, clicked, changed, onDelete }) => {
  const styles = {
    "@media(min-width: 500px)": {
      width: "450px",
    },
  };

  return (
    <div className="Person" style={styles}>
      <h3 onClick={onDelete}>
        I am {name} and {age}{" "}
      </h3>
      <p onClick={clicked}>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Radium(person);
