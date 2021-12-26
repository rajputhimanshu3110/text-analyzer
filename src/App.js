import Nav from './components/Nav.js'
import About from './components/About.js'
import TextForm from './components/TextForm'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TextForm />} />
          <Route path="/" element={<TextForm />} />
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
