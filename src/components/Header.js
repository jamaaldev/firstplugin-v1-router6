import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="tab">
        <div className="logo">
          {/* <img className="logos" src="/" alt="logo" width="120px"/> */}
          {/* you can delete h3 after you insert your svg or img logo in img element */}
          <h3>Your Logo</h3>
        </div>
        <NavLink to={"/"}>
          <button className="tablinks dashboard">Dashboard</button>
        </NavLink>
        <NavLink to={"support"}>
          <button className="tablinks support">Support</button>
        </NavLink>
        <NavLink to={"settings"}>
          <button className="tablinks settings">Settings</button>
        </NavLink>
        <NavLink to={"templates"}>
          <button className="tablinks templates">Templates</button>
        </NavLink>
      </div>
    </>
  );
};

export default Header;
