import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PlannerPage from "./components/PlannerPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Routes>
        {/* Ana sayfa - Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Plan oluşturma sayfası */}
        <Route path="/planner" element={<PlannerPage />} />
      </Routes>
    </div>
  );
}

export default App;
