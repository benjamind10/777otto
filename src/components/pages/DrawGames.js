import React from 'react';
import '../../App.css';
import Results from '../Results';

console.log(process.env);

export default function DrawGames() {
  return (
    <div>
      <h1>Draw Games</h1>
      <Results />
    </div>
  );
}
