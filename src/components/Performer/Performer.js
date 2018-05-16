import React, { Component } from 'react';
import classes from './Performer.css';
import FacebookIcon from '../../icons/facebook.svg';
import InstagramIcon from '../../icons/instagram.svg';
import Product from '../Product/Product';

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
               <p className={classes.description} >"{data.description}"</p>
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
            <div className={classes.productList}>
               {
                  this.state.showProducts
                  ?
                  products.map((product) => {
                     return (
                        <Product 
                           key={product.id}
                           description={product.description}
                           audienceSize={product.audienceSize}
                           duration={product.duration}
                           id={product.id}
                           price={product.price}
                           productImage={product.productImage}
                        />
                     );
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