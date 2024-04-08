import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
