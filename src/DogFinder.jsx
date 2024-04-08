import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import { useState } from 'react';

/** Checks the current state of AJAX request,
 * if it is loading it shows the loading message.
 * if not it renders DogDetails or DogList depending on the url.
 *
 * State:
 * dogsList: array of all dogs.
 * Each dog is representing an object with info about them.
 *
 * isLoading : true if it is waiting for getting data. false if it is completed.
 *
 *
 * App -> DogFinder
 *
 */

function DogFinder() {
  const [dogsList, setDogsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs() {
    const resp = await fetch("http://localhost:5001/dogs");
    const data = await resp.json();
    setDogsList(data);
    setIsLoading(false);
  }

  if (isLoading) getDogs();

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <BrowserRouter>
        <Routes>
          <Route element={<DogList dogsList={dogsList} />} path="/" />
          <Route element={<DogDetails dogsList={dogsList} />} path="/dogs/:name" />
          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default DogFinder;
