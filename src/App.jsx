import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import { useState } from 'react';

function App() {
  const [dogsList, setDogsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs() {
    const resp = await fetch("http://localhost:5001/dogs");
    const data = await resp.json();
    setDogsList(data);
    setIsLoading(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DogList dogsList={dogsList} isLoading={isLoading} getDogs={getDogs} />} path="/" />
          <Route element={<DogDetails dogsList={dogsList} isLoading={isLoading} getDogs={getDogs} />} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
