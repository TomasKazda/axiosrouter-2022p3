import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import P404 from "./components/404";
import DateList from "./components/Data"

function App() {
  return <div className='App'>
      <h1>Master &mdash; detail example</h1>
      <div>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<About who="Pepa" />} />
            <Route path="/about" element={<About who="Jarda" />} />
            <Route path="/date/:d?" element=<DateList/> />
          </Route>
          <Route path="*" element={<P404 />} />
        </Routes>
      </div>
  </div>
}

export default App;
