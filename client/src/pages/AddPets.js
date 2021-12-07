import { Link } from "react-router-dom";
import { useState } from "react";
import LogoPetsLogout from "../components/LogoPetsLogout";
import { useMutation } from "@apollo/client";
import { ADD_PET } from "../util/mutations";

const styles = {
  formControl: {
    display: "flex",
    padding: "0.25em",
  },
  label: {
    flex: "0 1 6em",
    paddingRight: "0.25em",
  },
};

const initialFormState = {
  firstName: "",
  lastName: "",
  species: "",
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
      
    } catch (err) {
      console.error(err);
    }
    setFormState({
      firstName: "",
      lastName: "",
      species: "",
      breed: "",
    });
  };

  return (
    <div>
      <LogoPetsLogout />
      <h1>Add a new pet:</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formControl}>
          <label htmlFor="petname" style={styles.label}>
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
        <div style={styles.formControl}>
          <label htmlFor="ownerlastname" style={styles.label}>
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
        <div style={styles.formControl}>
          <label htmlFor="species" style={styles.label}>
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
        <div style={styles.formControl}>
          <label htmlFor="breed" style={styles.label}>
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
        <div style={styles.formControl}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <Link to="/mypets">Go back to Owner Home</Link>
      </div>
    </div>
  );
}
