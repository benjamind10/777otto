import React from 'react';
import '../../App.css';
import Results from '../Results';
import { connect } from 'react-redux';

const DrawGames = ({ currentUser }) => {
  console.log(currentUser);

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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(DrawGames);
