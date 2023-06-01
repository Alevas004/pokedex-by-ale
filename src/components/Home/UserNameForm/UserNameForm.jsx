import { useRef, useState } from "react";
import "./UserNameForm.css";

export const UserNameForm = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const inputAlreadyClicked = useRef(false)

  const handleChange = (e) => {
    const nameValue = e.target.value;
    if(!inputAlreadyClicked.current) inputAlreadyClicked.current = true

    if (!nameValue) {
      setNameError("Nickname is empty");
    } else if (/[^a-z ]/i.test(nameValue)) {setNameError("Just letters and spaces allowed")
  } else if (!/^[a-z]{2,} ?$/i.test(nameValue)) {setNameError("Your nickname need at least 2 characters")} 
  else setNameError("")

  setUserNameValue(nameValue)
  }; 


  const handleSubmit = (e) => {
    e.preventDefault()

    if(!nameError && inputAlreadyClicked.current) onSendName(userNameValue)
  }

  return (
    <form onSubmit={handleSubmit} className="form-home">
      {Boolean(nameError) && <p className="name-error">{nameError}</p>}
      <input
        type="text"
        name=""
        id=""
        placeholder="Your nickname"
        value={userNameValue}
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="label">Send</button>
    </form>
  );
};
