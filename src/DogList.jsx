import React, { useState } from "react";
import { Link } from "react-router-dom";


function DogList({ dogsList, isLoading, getDogs }) {

  function showLoading() {
    return <div>Loading</div>;
  }

  function showDogs() {
    return <div>
      {dogsList.map(dog => (
        <Link key={dog.name} to={`dogs/${dog.name}`}>{dog.name}</Link>
      ))}
    </div>;
  }

  if (isLoading) getDogs();

  return (<div>
    {isLoading
      ? showLoading()
      : showDogs()}
  </div>);
}

export default DogList;