import React from 'react';
import '../../App.css';
import Results from '../Results';

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
