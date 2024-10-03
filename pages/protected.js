// pages/protected.js
import useProtectedRoute from '../hooks/useProtectedRoute';

const ProtectedPage = () => {
  useProtectedRoute();

  return <div>Esta es una página protegida.</div>;
};

export default ProtectedPage;
