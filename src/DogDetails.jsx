import { Link } from "react-router-dom";

/** Shows details about a dog
 *
 * Props:
 * - dogsList: array of all dogs.
 * Each dog is representing an object with info about them.
 *
 *
 * App -> DogFinder -> DogDetails
 *
 */

function DogDetails({ dog }) {

  function showDog() {
    return <div>
      <img src={`/${dog.src}.jpg`}/>
      <p>{dog.name}</p>
      <p>{dog.age}</p>
      <p>{dog.facts}</p>
      <Link to={'/'}>Go Back!</Link>
    </div>;
  }

  return (<div>
      {showDog()}
  </div>);

}

export default DogDetails;