import React, { useState } from 'react';
import './Adminloginform.css'; // Import the CSS file for styling

const AdminLogin = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://img.freepik.com/premium-photo/top-view-modern-workspace-with-paperwork-digital-devices-copy-space_67155-7191.jpg?size=626&ext=jpg&ga=GA1.1.1668626449.1692894745&semt=ais')"}}>
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 rounded-lg p-8 w-96">
      <h2 className="text-2xl mb-8">Admin Login</h2>
      
      <input
        className="w-full px-4 py-2 mb-4 border rounded"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      
      <input
        className="w-full px-4 py-2 mb-4 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      >
        Login
      </button>
    </form>
  </div>
  
  );
};

export default AdminLogin;
