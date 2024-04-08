import React, { useState } from "react";
import { Link } from "react-router-dom";


function DogList() {
  const [dogsList, setDogsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs() {
    const resp = await fetch("http://localhost:5001/dogs");
    const data = await resp.json();
    setDogsList(data);
    setIsLoading(false);
  }

  function showLoading() {
    return <div>Loading</div>;
  }

  function showDogs () {
    return <div>
      {dogsList.map(dog => (
        <Link key={dog.name} to={`dogs/${dog.name}`}>{dog.name}</Link>
      ))}
    </div>
  }

  if (isLoading) {
    getDogs();
    return showLoading();
  } else {
    return showDogs();
  }
}

export default DogList;