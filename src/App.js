import RegLogForm from './RegLogForm';
import {BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegLogForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


