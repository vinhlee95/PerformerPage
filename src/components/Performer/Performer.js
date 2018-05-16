import React, { Component } from 'react';
import classes from './Performer.css';
import FacebookIcon from '../../icons/facebook.svg';
import InstagramIcon from '../../icons/instagram.svg';

class Performer extends Component {
   constructor(props) {
      super(props);
      this.state = { showProducts: false };
   }

   handleShowProducts = (e) => {
      e.preventDefault();
      this.setState({ showProducts: !this.state.showProducts })
   }

   render() {
      const {data, products} = this.props;
      return(
         <div>
            <div className={classes.profile}>
               <div>
                  <img src={data.profilePic} alt="profile-pic" className={classes.profilePic} />
                  <h2 style={{textAlign:'center'}}>{data.name}</h2>               
                  <div className={classes.socialMedia}>
                     <a href={data.profile_facebook} ><img src={FacebookIcon} alt="profile-facebook" /></a>
                     <a href={data.profile_instagram} ><img src={InstagramIcon} alt="profile-instagram" /></a>
                  </div>
               </div>
               <p>"{data.description}"</p>
            </div>
            <button onClick={e => this.handleShowProducts(e)}>
               {
                  this.state.showProducts
                  ?
                  "Minimize"
                  :  
                  `Browse performances`                     
               }
            </button>
            <div className={classes.products}>
               {
                  this.state.showProducts
                  ?
                  products.map((product) => {
                     return <div key={product.id} >{product.title}</div>
                  })
                  :
                  null
               }
            </div>
         </div>
      );
   }
}

export default Performer;