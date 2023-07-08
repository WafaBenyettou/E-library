import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../src/routes/Main';
import Licence1 from '../src/routes/Licenceone';
import Licence2 from '../src/routes/Licencetwo';
import Licence3 from '../src/routes/Licencethree';
import Master1 from '../src/routes/Materone';
import Master2 from '../src/routes/Matertwo';

import Course1 from '../src/routes/Courseone';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route path="/Licenceone" element={<Licence1 />} />
        <Route path="/Courseone" element={<Course1 />} />


        <Route path="/Licencetwo" element={<Licence2 />} />
        <Route path="/Licencethree" element={<Licence3 />} />
        <Route path="/Masterone" element={<Master1 />} />
        <Route path="/Mastertwo" element={<Master2 />} />
      </Routes>
    </Router>
  );
}

export default App;
