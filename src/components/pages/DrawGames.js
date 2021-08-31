import React from 'react';
import '../../App.css';
import Results from '../Results';
import { connect } from 'react-redux';
import axios from 'axios';

const DrawGames = ({ currentUser }) => {
  const parse = axios
    .get('https://www.flalottery.com/exptkt/p3.htm')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      {currentUser ? (
        <div>
          <Results />
          {parse}
        </div>
      ) : (
        <div>You are not authorized.</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(DrawGames);
