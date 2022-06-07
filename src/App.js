import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from './container/Container';
import Message from './message/Message';
import KMK from './kmk/KMK';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="message" element={<Message />} />
          <Route path="bonus" element={<KMK />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
