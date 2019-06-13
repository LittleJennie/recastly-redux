import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (state) => ({videos: state.videoList});
var mapDispatchToProps = (dispatch) =>{
    return {
        videoList: () => dispatch({type: 'CHANGE_VIDEO_LIST'}),
    }
}

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

// thing = connect()();//class

// thing2 = () => connect()() // function that will in
// thing2 = function( ) {
//     return connect()();
// }

// thing() // instance of class
// thing2()
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
