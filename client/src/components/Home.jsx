import Landing from "./Landing";
import ViewList from "./ViewLists";

const Home = (props) => {

  let componentToRender

  if (props.currentPage === 0) {
    componentToRender = <Landing incrementPage={props.incrementPage} />
  } else if (props.currentPage === 1) {
    componentToRender = <ViewList incrementPage={props.incrementPage} />
  }

  return (
    <div className="home">
      {componentToRender}
    </div>
  )
}

export default Home