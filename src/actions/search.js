import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return () => {    
    console.log({YOUTUBE_API_KEY, q})
    searchYouTube({key:YOUTUBE_API_KEY, query:q}, function(data) {
      store.dispatch(() => changeVideo(data[0]));
      store.dispatch(() => changeVideoList(data));
    }) // the state in store
  }
};

export default handleVideoSearch;


// {
//   type: 'CHANGE_VIDEO_LIST,CHANGE_VIDEO',
//   videos: searchYouTube({YOUTUBE_API_KEY, q}, changeVideoList), // the state in store
//   // video: changeVideo(videos[0])
// }

// {
//   YOUTUBE_API_KEY: undefined
//   q:undefined
// }


// {
//   YOUTUBE_API_KEY: YOUTUBE_API_KEY
//   q:q
// }