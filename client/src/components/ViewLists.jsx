const ViewList = (props) => {

  // let button

  // if (props.title && props.description && props.phrases) {
  //   button = <button onClick={props.incrementPage}>View</button>
  // } else {
  //   button = <button onClick={props.incrementPage} disabled>View</button>
  // }

  return (
      <div className="App">
        <h1>Journey Words</h1>
        <div>
        {/* <h2>{collection.title}</h2> */}
        <h2>Vocabulary Lists</h2>
        </div>
      <h3>Add another collection:</h3>
      <form>
        <label htmlFor="title">Title</label>
       <input
          id="title"
          // value={formState.title}
          // onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          // value={formState.description}
          // onChange={handleChange}
        />
        <label htmlFor="phrase">Phrase:</label>
        <input
          type="phrase"
          // value={formState.price}
          // onChange={handleChange}
        />
        <button type="submit">Add collection</button>
      </form>
    </div>
  )

}

export default ViewList