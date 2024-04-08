import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";


function FilterDogs({ dogsList }) {

    const { name } = useParams();
    const selectedDog = dogsList.find(dog => dog.name === name);

    return <div>
        <DogDetails dog={selectedDog}/>
    </div>
}

export default FilterDogs;