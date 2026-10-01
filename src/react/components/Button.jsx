import Icon from "./Icon.jsx";


function Button({icon, action}) {
  return (
    <>
      <button onClick={action}>
        <Icon url={icon}/>
      </button>
    </>
  )
}

export default Button;