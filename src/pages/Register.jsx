import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      } else {
        dispatch({ type: 'REGISTER_SUCCESS' });
        navigate('/login');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <div className="flex justify-center mb-4">
          <PersonIcon style={{ color: '#500042', height: 80, width: 80, backgroundColor: 'white', borderRadius: '100px' }} />
        </div>
        <h2 className="text-center text-2xl font-bold text-[#500042] mb-4">Register</h2>
        <form onSubmit={handleClick}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              required
              className="border border-[#500042] p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              required
              className="border border-[#500042] p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              required
              className="border border-[#500042] p-2 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-[#500042] text-white hover:bg-[#6e2c5c] font-bold py-2 rounded w-full transition duration-200"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-[#500042] font-bold">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
