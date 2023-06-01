import { useEffect, useState } from "react";
import "./FilterForm.css";
import { Form } from "react-router-dom";
import { getAllTypes } from "../../../../services/getAllTypes";

export const FilterForm = ({ nameInitial, typeInitial }) => {
  const [types, setTypes] = useState([]);
  const [nameValue, setNameValue] = useState(nameInitial);
  const [typeValue, setTypeValue] = useState(typeInitial);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNameValue(newValue);
  };

  const handleTypeChange = (e) => {
    const newTypeValue = e.target.value;
    setTypeValue(newTypeValue);
  };

  useEffect(() => {
    const loadTypes = async () => {
      const typesData = await getAllTypes();
      setTypes(typesData);
    };
    loadTypes();
  }, []);

  useEffect(() => {
    setNameValue(nameInitial);
  }, [nameInitial]);

  useEffect(() => {
    setTypeValue(typeInitial);
  }, [typeInitial]);

  return (
    <Form className="form">
      <div className="bg">
        <h2>Searcher</h2>

        <div className="form-input__container">
          <label htmlFor=""></label>
          <input
            value={nameValue}
            onChange={handleChange}
            type="text"
            placeholder="Search Pokemon"
            name="pokemonName"
            className="form__input__name"
          />
        </div>
        <div className="form-input__container2">
          <select
            name="pokemonType"
            value={typeValue}
            onChange={handleTypeChange}
            className="form__input-type"
          >
            <option value="">All</option>
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn-search">Search</button>
      </div>
    </Form>
  );
};
