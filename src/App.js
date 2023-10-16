import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Task from './components/Task';
function App() {
  return (
    <>
      <div className="container mt-3">
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </div>
    </>
  );
}
export default App;