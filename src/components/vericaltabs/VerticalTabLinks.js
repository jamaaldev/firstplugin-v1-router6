import { NavLink } from "react-router-dom";
import "./VerticalTabLinks.scss";

function VerticalTabLinks() {
  return (
    <>
      <div class="verical_tab">
        <NavLink to={"/settings/generalsettings"}>
          <button className="tablinks verical_tab">General Settings</button>
        </NavLink>

        <NavLink to={"/settings/othersettings"}>
          <button className="tablinks verical_tab">Other Settings</button>
        </NavLink>

        <NavLink to={"/settings/googleaddress"}>
          <button className="tablinks verical_tab">Google Address Autocomplete</button>
        </NavLink>
      </div>
    </>
  );
}

export default VerticalTabLinks;
