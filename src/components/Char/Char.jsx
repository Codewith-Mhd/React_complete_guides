import React from "react"

const char = ({character, deleted}) => {
  const styles = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center"
  }
  return (
    <div style={styles} onClick={deleted}>
      {character}
    </div>
  )
}

export default char
