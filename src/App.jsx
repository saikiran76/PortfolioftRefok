import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LoadingPage from './components/LoadingPage';

const App = () => {
  return (
    <Router>
      <div className="h-screen w-full bg-zinc-900 font-medium">
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/" element={<LoadingPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;