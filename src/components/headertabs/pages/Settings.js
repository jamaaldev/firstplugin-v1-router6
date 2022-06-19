import VerticalContent from "../../verticaltabs/VerticalContent";

import VerticalTabLinks from "../../verticaltabs/VerticalTabLinks";
function Settings() {
  return (
    <>
      <div className="vertical_tab_container">
        <div className="vertical_tab_container_both">
          <VerticalTabLinks />
          <VerticalContent />
        </div>
      </div>
    </>
  );
}

export default Settings;
