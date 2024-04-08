import { Link } from "react-router-dom";


/** Shows a list of all dogs
 *
 * Props:
 * - dogsList: array of all dogs.
 * Each dog is representing an object with info about them.
 *
 *
 * App -> DogFinder -> DogList
 *
 */

function DogList({ dogsList }) {

  function showDogs() {
    return <div>
      {dogsList.map(dog => (
        <div>
          <img src={`../public/${dog.src}.jpg`}/>
          <Link key={dog.name} to={`dogs/${dog.name}`}>{dog.name}</Link>
        </div>
      ))}
    </div>;
  }

  return (<div>
      {showDogs()}
  </div>);
}

export default DogList;