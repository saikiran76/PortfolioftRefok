import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Marks from "./components/marks";
import NewCard from "./components/newCard";
import Stripes from "./components/stripes";
import LocomotiveScroll from 'locomotive-scroll';
import "./fonts/Satoshi-Black.otf"
import "./fonts/Satoshi-BlackItalic.otf"
import "./fonts/Satoshi-Bold.otf"
import "./fonts/Satoshi-Medium.otf"


const App = () => {
  const scroll = new LocomotiveScroll();
  return(
    <div className="h-screen w-full bg-zinc-900 font-medium scrollbar-custom">
       <div className="bg-zinc-900 md:w-full">
        <NavBar />
      </div>
      <div className="bg-zinc-900 md:w-full">
        <Work />
      </div>
      <div className="bg-zinc-900 md:w-full">
        <Stripes />
      </div>
      <div className="bg-zinc-900 md:w-full">
        <Cards />
      </div>
      <div className="bg-zinc-900 md:w-full">
        <Marks />
      </div>
      <div className="bg-zinc-900 md:w-full">
        <NewCard />
      </div>
      <div className="bg-zinc-900 md:w-full">
        <Footer/>
      </div>

    </div>
  )
}

export default App;


