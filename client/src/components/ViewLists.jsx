const ViewList = (props) => {

  let button

  if (props.title && props.description && props.phrases) {
    button = <button onClick={props.incrementPage}>View</button>
  } else {
    button = <button onClick={props.incrementPage} disabled>View</button>
  }

  return (
    <div></div>
  )

}

export default ViewList