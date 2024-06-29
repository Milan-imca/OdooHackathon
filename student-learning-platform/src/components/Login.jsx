// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student');

//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Handle login logic (validate against stored data)
//     console.log(username, password, role);

//     // Pass role to parent component for handling navigation
//     onLogin(role);
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <select value={role} onChange={(e) => setRole(e.target.value)}>
//         <option value="student">Student</option>
//         <option value="teacher">Teacher</option>
//         <option value="admin">Admin</option>
//       </select>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          username,
          password,
        }
      );
      const { role } = response.data;
      onLogin(role);
    } catch (error) {
      console.error("Error logging in", error);
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
