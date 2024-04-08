import { useParams } from "react-router-dom";

function DogDetails({ dogsList, isLoading, getDogs }) {

  const { name } = useParams();
  const dog = dogsList.filter(dog => dog.name === name);

  function showLoading() {
    return <div>Loading</div>;
  }

  function showDog() {
    return <div>
      dog
    </div>;
  }

  if (isLoading) getDogs();

  return (<div>
    {isLoading
      ? showLoading()
      : showDog()}
  </div>);

}

export default DogDetails;