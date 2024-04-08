import { useParams } from "react-router-dom";
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

function DogDetails({ dogsList }) {

  const { name } = useParams();
  const dog = dogsList.filter(dog => dog.name === name)[0];

  function showDog() {
    return <div>
      <img src={`../public/${dog.src}.jpg`}/>
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