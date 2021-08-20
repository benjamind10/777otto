import React from 'react';

import SignIn from '../../containers/sign-in.component';
import SignUp from '../../containers/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSingUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSingUpPage;
