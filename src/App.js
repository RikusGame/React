// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentRepoProvider from "./context/DocumentRepoProvider";   // 👈 importa el provider

import Login        from "./pages/Login";
import StartupPage  from "./pages/StartupPage";
import AdminRoutes  from "./routes/AdminRoutes";
import LandingPage  from "./pages/landing/LandingPage";

const App = () => (
  <DocumentRepoProvider>        {/* 👈 envuelve todo el Routing */}
    <Router>
      <Routes>
        <Route path="/"        element={<StartupPage />} />
        <Route path="/login"   element={<Login />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  </DocumentRepoProvider>
);

export default App;
