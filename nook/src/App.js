// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './login';
import Page2 from './frontpage';
import Page3 from './testi';
import Page4 from './work';
import Page5 from './peli';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path='/cv' element={<Page3/>}/>
        <Route path='/mywork' element={<Page4/>}/>
        <Route path='/peli' element={<Page5/>}/>

      </Routes>
    </Router>
  );
}

export default App;
