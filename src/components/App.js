import React, { Component } from 'react';
import request from 'superagent';
import Performer from './Performer/Performer';

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
            res 
            ? 
            this.setState({ performer: res.body }) 
            : 
            console.log('Error fetching')
         });
   }
   
   render() {
      let performer;
      if(this.state.performer) {
         performer = <Performer 
                        data={this.state.performer.data}
                        products={this.state.performer.products}
                     />
      } else {
         performer = <div>Loading...</div>
      }
      return (
         <div className="App">
            <h2>Performer Info</h2>
            {performer}
         </div>
      );
   }
}

export default App;
