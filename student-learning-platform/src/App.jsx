import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import StudentDashboard from "./dashboard/StudentDashboard";
import TeacherDashboard from "./dashboard/TeacherDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";

const App = () => {
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userRole) => {
    setRole(userRole);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setRole(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login when the user logs out
      <Navigate to="/login" />;
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <nav>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && <Link to="/register">Register</Link>}
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to={`/${role}`} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/student"
          element={
            isLoggedIn && role === "student" ? (
              <StudentDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/teacher"
          element={
            isLoggedIn && role === "teacher" ? (
              <TeacherDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            isLoggedIn && role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
