import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function App() {
  const { username } = useContext(UserContext);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={username?<Main />:<Login />}/>
        {/* <Route path='/main' element={<Main />}/> */}
      </Routes>
    </div>
  );
}

export default App;
