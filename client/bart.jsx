
import React, { PropTypes } from 'react';
// import axios from 'axios';

class Bart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myValue: "set ZAK This"
    }
  }

  // componentWillMount(){
  //   // let delays = getBartDelays();
  //   // this.setState({ myValue: delays });
  // }

  // getBartDelays(){
  //   let base = "http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=MW9S-E7SL-26DU-VV8V&date=today";
  //   return axios.get(base)
  //     .then((response) => {
  //       return response.data
  //     })
  //     .catch(function(response) {
  //       if (response instanceof Error){
  //         console.log('Error', response.message);
  //       } else {
  //         console.log(response.data);
  //       }
  //     });
  // }

  render() {
    if (!this.state.myValue) {
      return <div></div>;
    } else {
      return (
        <div className='bartDelays'>
          <p>{this.state.myValue}</p>
        </div>
      );
    }
  }
}
// Bart.propTypes = {

// };

export default Bart;
