import React, { Component } from 'react';
import request from 'superagent';

class App extends Component {
   constructor(props){
      super(props);
      this.state = {};
   }

   componentDidMount() {
      request
         .post('https://nodedev.gigleapp.com/user')
         .send({
            action: 'getPerformersAndProducts',
            userId: 'ZuaqGwjNc6M47HchSJYVa2lunf03'
         })
         .end((err, res) => {
            res ? this.setState({
               performers: res.body
            }) : console.log('Error fetching')
         });
   }
   
   render() {
      console.log(this.state.performers)
      return (
         <div className="App">
            <h2>Performer Info</h2>
         </div>
      );
   }
}

export default App;
