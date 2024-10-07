// pages/login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { BoxRegister, FormBox, FormContainer, SubmitButton } from './login.styles';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/'); // Redirigir a la página principal después de iniciar sesión
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };

  const handleRegisterRedirect = () => {
    router.push('/register'); // Redirige a la página de registro
  };

  return (
    <>
    <NavBar />
    <FormContainer>
    <FormBox>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <SubmitButton type="submit" className="btn btn-primary">Iniciar sesión</SubmitButton>
      </form>
      
      <BoxRegister>
        <p>¿No tienes cuenta? <button className="btn btn-secondary" onClick={handleRegisterRedirect}>Regístrate aquí</button></p>
      </BoxRegister>
      </FormBox>
      </FormContainer>
      <Footer />
      </>
  );
};

export default LoginPage;
