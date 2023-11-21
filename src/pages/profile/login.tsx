
import React from 'react';
import LoginForm from '@/components/auth/login';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="login-form-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
