import CarDetailsPage from "./components/CarDetailsPage";
import Page from "./components/Page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/details/:carId" element={<CarDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
