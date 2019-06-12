import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// refer to: https://redux.js.org/api/combinereducers
var rootReducer = combineReducers({currentVideo, videoList});

export default rootReducer;
