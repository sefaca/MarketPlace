// pages/register.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { FaGoogle } from 'react-icons/fa';
import { FormBox, FormContainer, SubmitButton, CheckboxContainer, CheckboxText, SocialButtonContainer, SocialButton } from './register.styles';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: '',
  });
  
  const [agreed, setAgreed] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llama a la función de registro
      await register(formData.email, formData.password, formData.firstName, formData.lastName, formData.birthDate);
      router.push('/'); // Redirige al usuario al inicio después de registrarse
    } catch (error) {
      console.error('Error de registro:', error);
    }
  };

  return (
    <>
    <NavBar />
    <FormContainer>
    <FormBox>
    <h2 className="text-center">Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de nacimiento</label>
          <input
            type="date"
            name="birthDate"
            className="form-control"
            value={formData.birthDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <CheckboxContainer>
            <input type="checkbox" checked={agreed} onChange={handleCheckboxChange} required />
            <CheckboxText>
              Are you agree to Clicon <a href="#">Terms of Condition</a> and <a href="#">Privacy Policy</a>.
            </CheckboxText>
          </CheckboxContainer>
        <SubmitButton type="submit" className="btn btn-primary">Registrar</SubmitButton>
        <SocialButtonContainer>
        <SocialButton className="google">
            <FaGoogle style={{ marginRight: '8px' }} /> Sign up with Google
          </SocialButton>
        </SocialButtonContainer>
      </form>
    </FormBox>
    </FormContainer>
    <Footer />
    </>
  );
};

export default RegisterPage;
