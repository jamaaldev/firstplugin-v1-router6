import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import Header from "./components/Header";
import Settings from "./components/Settings";
import Support from "./components/Support";
import Templates from "./components/Templates";
import TheContent from "./components/TheContent";
const App = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route element={<TheContent />}>
            <Route path="/support" element={<Support />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/templates" element={<Templates />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
