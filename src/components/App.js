import React, { Component } from 'react';
import request from 'superagent';
import Performer from './Performer/Performer';
import Spinner from './UI/Spinner/Spinner';

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
         console.log(this.state.performer[0].data);
         console.log(this.state.performer[0].products);
         performer = <Performer 
                        data={this.state.performer[0].data}
                        products={this.state.performer[0].products}
                     />
      } else {
         performer = <Spinner />
      }
      return (
         <div className="App">
            Header
            {performer}
         </div>
      );
   }
}

export default App;
