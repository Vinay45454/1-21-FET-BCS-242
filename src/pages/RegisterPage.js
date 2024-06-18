import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { registerUser } from '../services/register';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    rollNumber: '1/21/FET/BCS/242',
    email: 'tiwarivinay9310@gmail.com',
    accessCode: 'HkJwmG'
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData.rollNumber, formData.email, formData.accessCode);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Roll Number"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Access Code"
          name="accessCode"
          value={formData.accessCode}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
      {message && (
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default RegisterPage;
