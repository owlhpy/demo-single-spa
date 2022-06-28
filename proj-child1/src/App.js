import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import RouterA from './modules/routerA';
import RouterB from './modules/routerB';

const IndexPage = () => {
  return (
    <div>
      <p>
        <Link to={'/routera'}> go to a </Link>
      </p>
      <p>
        <Link to={'/routerb'}> go to b </Link>
      </p>
      <div className="testa">
        ddddddd
      </div>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/proj1'>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/routera" element={<RouterA />} />
          <Route path="/routerb" element={<RouterB />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
