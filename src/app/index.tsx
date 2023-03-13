import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "../common/components/Footer";
import Header from "../common/components/Header";
import Home from "../features/Home";
import Login from "../features/Login";
import PersonalInfo from "../features/Personal";
import "./index.scss";

const App: React.FC = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<AuthRoute />}>
            <Route path="/personal-info" element={<PersonalInfo />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const AuthRoute: React.FC = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
