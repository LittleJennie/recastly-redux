import Redux from 'redux';

var videoListReducer = (prevState = [], action) => {
  //TODO: define a reducer for the videoList field of our state.


  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return prevState;
  }
};

export default videoListReducer;
