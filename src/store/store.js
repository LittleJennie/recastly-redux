import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// export default function configureStore(initialState) {
//     return createStore(
//         rootReducer,
//         initialState,
//         applyMiddleware(thunk)
//     );
// }
// export var Thunk = function(x) {
//     return function(dispatch) {
//       setTimeout(function() {
//         dispatch({
//           type: 'CHANGE_VIDEO',
//         });
//       }, 100);
//     };
//   };

var initialState = {
    currentVideo:exampleVideoData[0],
    videoList: exampleVideoData
}


var store = createStore(rootReducer, initialState, applyMiddleware(thunk));
console.log(store.getState())

export default store;
