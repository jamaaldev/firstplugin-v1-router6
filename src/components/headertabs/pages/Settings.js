import VerticalContent from "../../vericaltabs/VerticalContent";

import VerticalTabLinks from "../../vericaltabs/VerticalTabLinks";
function Settings() {
  return (
    <>
      <div className="verical_tab_container">
        <div className="verical_tab_container_both">
          <VerticalTabLinks />
          <VerticalContent />
        </div>
      </div>
    </>
  );
}

export default Settings;
