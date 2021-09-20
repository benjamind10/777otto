import React from 'react';
import '../../App.css';
import Results from '../Results';
import { connect } from 'react-redux';
import Pick from '../../pick3/Pick';

const DrawGames = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <div>
          <Pick />
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
