import { Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Register from './component/register';
import Student from './component/StudentHome';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='student' element={<Student/>} />
    </Routes>
    </>
  );
}

export default App;
