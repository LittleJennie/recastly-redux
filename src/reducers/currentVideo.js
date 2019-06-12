import Redux from 'redux';

var currentVideoReducer = (prevState = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  } else {
    return prevState;
  }
};

export default currentVideoReducer;
