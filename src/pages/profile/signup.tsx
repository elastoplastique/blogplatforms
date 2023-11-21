
import React from 'react';
import SignupForm from '@/components/auth/signup';

const SignupPage: React.FC = () => {
  return (
    <div className="signup-page">
      <h1>Signup</h1>
      <div className="signup-form-container">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
