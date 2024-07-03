import CarDetailsPage from "./Pages/CarDetailsPage";
import Page from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegistration from "./Pages/UserRegistration";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/Home" element={<Page />} />
        <Route path="/details/:carId" element={<CarDetailsPage />} />
        <Route path="/user" element={<UserRegistration />} />
      </Routes>
    </Router>
  );
};

export default App;
