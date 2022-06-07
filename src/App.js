import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './container/Container';
import Message from './message/Message';
import KMK from './kmk/KMK';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="message" element={<Message />} />
          <Route path="bonus" element={<KMK />} />
        </Routes>
      </BrowserRouter> */}
      testing
    </div>
  );
}

export default App;
