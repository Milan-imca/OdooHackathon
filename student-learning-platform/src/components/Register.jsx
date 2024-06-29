// import React, { useState } from "react";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("student");

//   const handleRegister = (event) => {
//     event.preventDefault();
//     // Handle registration logic (save data to database or state)
//     console.log(username, password, role);
//   };

//   return (
//     <form onSubmit={handleRegister}>
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
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;

import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", {
        username,
        password,
        role,
      });
      alert("User registered successfully");
    } catch (error) {
      console.error("Error registering user", error);
      alert("Error registering user");
    }
  };

  return (
    <form onSubmit={handleRegister}>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
