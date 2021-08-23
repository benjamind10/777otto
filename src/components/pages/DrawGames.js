import React, { useState } from 'react';
import '../../App.css';
import Results from '../Results';
import { auth } from '../../firebase/firebase.utils';

const DrawGames = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <div>
          <Results />
        </div>
      ) : (
        <div>You are not authorized.</div>
      )}
    </div>
  );
};

export default DrawGames;
