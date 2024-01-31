
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Home from './Pages/Home/Home';
import Skill from './Pages/Skill/Skill';



function App() {
  return (
    <div className="App">
       <Routes>
        {/* Routes in home page   */}
        <Route path='/' element={<Main child={<Home />} />}></Route>

        <Route path='/Skill' element={<Main child={<Skill />} />}></Route>
       
       
       
        </Routes>
      
    </div>
  );
}

export default App;
