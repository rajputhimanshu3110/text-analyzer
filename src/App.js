import Nav from './components/Nav.js'
import TextForm from './components/TextForm'


function App() {
  return (
    <div className="App">
      <Nav branding='Text Analyzer'/>
      <TextForm r='10'/>
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<TextForm r='10'/>} />
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>*/}
    </div>
  );
}

export default App;
