import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminRoutes from "./routes/AdminRoutes";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  </Router>
);

export default App;