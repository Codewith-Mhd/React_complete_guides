import React from "react"

const validation = ({inputLength}) => {
  let validationMSG = "Text enouph long"
  if (inputLength <= 5) {
    validationMSG = "Text too short"
  }
  return <div>{validationMSG}</div>
}

export default validation
