type propTypes = {
    type: "submit" | "reset" | "button"
    textHold: string
    text: string
}

function Button(props:propTypes) {
  return (
    <button type={props.type}>
      {props.text}
    </button>
  )
}

export default Button
