import React from "react"

const userInput = ({changed, currentName}) => {
  const inputStyle = {
    border: "1px solid red",
    borderRadius: "6px",
    padding: "5px"
  }
  return (
    <input
      style={inputStyle}
      type="text"
      onChange={changed}
      value={currentName}
    />
  )
}

export default userInput
