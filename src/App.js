import logo from './logo.svg';

import { Routes, Route } from 'react-router-dom';

import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Resume from './Pages/Resume/Resume';
import Project from './Pages/Projects/Project';
import Skills from './Pages/Skills/Skills';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
