function Icon({url}) {
  return (
    <>
      <svg className="icon" viewBox="0 0 24 24">
        <use href={url}></use>
      </svg>
    </>
  )
}

export default Icon;