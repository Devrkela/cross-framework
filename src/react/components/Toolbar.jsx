import Button from "./Button.jsx";

function Toolbar({buttons}) {
    return (
    <>
      <section className="toolbar">
        {
          buttons.map((button, index) => (
            <Button key={index} icon={button.icon} action={button.action}/>
          ))
        }
      </section>
    </>
  )
}

export default Toolbar;