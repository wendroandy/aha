
import classes from './App.module.css';
import Tags from './Component/Layout/Tags';
import Navbar from './Component/Layout/Navbar';
import HomeWrapper from './Component/Layout/HomeWrapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const onChangeHandler=()=> {
    console.log("yap")
  }
  return (
    <Router>
    <div className={classes.mainwrapper}>
      <Navbar/>
      <main>
      <Routes onChange={onChangeHandler}>
          <Route path='/' exact element={<HomeWrapper />} >
            <Route path='/search-result/:keyword/:total' exact element={<HomeWrapper />} />
          </Route>
          <Route path='/tags' element={<Tags total="20"/>}></Route>
      </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
