const Landing = (props) => {
  
  return (
    <div>
      <h1>Welcom to Journey Words!</h1>
      <h4>View lists Here</h4>
      <button onClick={props.incrementPage}>View List</button>
      <h4>Create lists Here</h4>
      <button onClick={props.incrementPage}>Create List</button>
    </div>
  )
}

export default Landing