
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Viewdoctor from './Components/Viewdoctor/Viewdoctor';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
         {/* localhost: 3000 - Main component */}
        <Route path='/' element={<Main/>} />
         {/* view a particular doctor localhost:3000/view.2 */}
         <Route path='/view/:id' element={<Viewdoctor/>}/>
        
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
