import { useAuth } from "../util/auth";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import LogoPetsLogout from "../components/LogoPetsLogout";
import { useMutation } from "@apollo/client";
import { ADD_PET } from "../util/mutations";

  const initialFormState = {
    firstName: "",
    lastName:"",
    species:"",
    breed: "",
  };

export default function AddPets() {
  const [addPet] = useMutation(ADD_PET);

  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(formState);
    try {
      const { data } = await addPet({
        variables: { ...formState },
      });

      setFormState({
      firstName: "",
      lastName:"",
      species:"",
      breed: "",
    });
    } catch (err) {
      console.error(err);
    }
    return <Redirect to="/mypets"/>;
  };

  return (
    <div>
      <LogoPetsLogout/>
      <h1>Add a new pet:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="petname">
            Pet Name
          </label>
          <input
            autoFocus
            id="petname"
            type="text"
            placeholder="Enter your pet's name"
            name="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="ownerlastname">
            Owner Last Name
          </label>
          <input
            autoFocus
            id="ownerlastname"
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="species">
            Species
          </label>
          <input
            autoFocus
            id="species"
            type="text"
            placeholder="Enter your pet's species"
            name="species"
            value={formState.species}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="breed">
            Breed
          </label>
          <input
            autoFocus
            id="breed"
            type="text"
            placeholder="Enter your pet's breed"
            name="breed"
            value={formState.breed}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}