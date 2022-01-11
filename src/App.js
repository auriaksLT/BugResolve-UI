import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Students from './pages/Students';
import NewStudent from './pages/NewStudent';
import Editstudent from './pages/Editstudent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App asdasd'>
      <Header />

      <div className='main flex-shrink-0'>
        <Router>
          <Routes>
            <Route exact path="/" element={ <Students /> } />
            <Route path="/add-student" element={ <NewStudent />} />
            <Route path="/edit-student/:id" element={ <Editstudent />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
