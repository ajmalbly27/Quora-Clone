import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import AddQuestion from './components/AddQuestion/AddQuestion';
import AddAnswer from './components/AddAnswer/AddAnswer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/add-question' element={<AddQuestion />}/>
        <Route path='/add-answer' element={<AddAnswer />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
