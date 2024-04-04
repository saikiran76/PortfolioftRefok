import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Cards from "./components/cards";
import Stripes from "./components/stripes";


const App = () =>{
  return(
    <div className="h-screen w-full bg-zinc-900">
      <NavBar/>
      <Work/>
      <Stripes/>
      <Cards/>

    </div>
  )
}

export default App;


