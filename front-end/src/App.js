import { Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Register from './component/register';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='register' element={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
