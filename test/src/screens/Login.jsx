import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5000/api/loginuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            if (!data.success) {
                alert("Wrong credentials");
            } else {
                localStorage.setItem("authtoken", data.authToken);
                console.log(localStorage.getItem("authtoken"))
                navigate('/');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('Wrong credentials');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name='email' value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" name='password' value={formData.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/signup" className='btn btn-danger ml-2'>Signup</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
