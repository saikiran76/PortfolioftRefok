import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Marks from "./components/marks";
import NewCard from "./components/newCard";
import Stripes from "./components/stripes";


const App = () => {
  return(
    <div className="h-screen w-full bg-zinc-900">
       <div className="bg-zinc-900">
        <NavBar />
      </div>
      <div className="bg-zinc-900">
        <Work />
      </div>
      <div className="bg-zinc-900">
        <Stripes />
      </div>
      <div className="bg-zinc-900">
        <Cards />
      </div>
      <div className="bg-zinc-900">
        <Marks />
      </div>
      <div className="bg-zinc-900">
        <NewCard />
      </div>
      <div className="bg-zinc-900">
        <Footer/>
      </div>

    </div>
  )
}

export default App;


