import React from 'react'
import Nav from './components/Nav.js'
import TextForm from './components/TextForm'


function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Nav branding='Text Analyzer'/>
        <TextForm r='10' label='Analysis Wing'/>
      </React.StrictMode>
      
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
