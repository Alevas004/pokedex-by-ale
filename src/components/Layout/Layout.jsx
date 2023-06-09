import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserNameContext } from "../../context/UserNameContext";
import "./Layout.css";
import pokedex from "../../images/pokedex.png";

export const Layout = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logOut = () => {
    removeUserName();
    navigate("/");
  };

  return (
    <div className="header-second">
      <div className="bg-header">
        <div className="logo-container">
          <img src={pokedex} alt="pokedex" />
        </div>

        <div className="header_deeper_header">
          <button onClick={logOut}>Log out</button>
        </div>
        <div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
