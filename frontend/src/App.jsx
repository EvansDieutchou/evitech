import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CollecteContacts from "./pages/CollecteContacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/collecte" element={<CollecteContacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
