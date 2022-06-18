import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/headertabs/pages/Dashboard";

import HeaderTabLinks from "./components/headertabs/HeaderTabLinks";
import Settings from "./components/headertabs/pages/Settings";
import Support from "./components/headertabs/pages/Support";
import Templates from "./components/headertabs/pages/Templates";
import HeaderContent from "./components/headertabs/HeaderContent";
const App = () => {
  return (
    <div>
      <HashRouter>
        <HeaderTabLinks />
        <Routes>
          <Route element={<HeaderContent />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/templates" element={<Templates />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
