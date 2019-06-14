import React from 'react';

var inputText = document.getElementsByClassName('form-control').innerHTML;

var Search = ({handleSearchInputChange}) => {
  return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={(e) => handleSearchInputChange(e.target.value)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>    
  )
}
console.log('test to show update');

  // var handleInputChange1 = (e) => {
  //   var inputtext = e.target.value;
  //   handleInputChange(inputtext);
  // }
 
// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ''
//     };
//   }

//   var handleInputChange1(e) {
//     var inputtext = this.props.getYouTubeVideos(e.target.value);
      // handleInputChange(inputText);
//     this.setState({
//       value: e.target.value
//     });
//   }

//   render() {
//     return (
//       <div className="search-bar form-inline">
//         <input
//           className="form-control"
//           type="text"
//           value={this.state.value}
//           onChange={this.handleInputChange.bind(this)}
//         />
//         <button className="btn hidden-sm-down">
//           <span className="glyphicon glyphicon-search"></span>
//         </button>
//       </div>
//     );
//   }
// }

export default Search;
