import React from 'react';
import ProductCard from '../UI/ProductCard/ProductCard';
import classes from './Product.css';

const Product = ({
      description,
      audienceSize,
      duration,
      id,
      price,
      productImage,
      name,
      profileThumb,
   }) => {
   return(
      <ProductCard>
         <div className={classes.imageContainer} >
            <img src={productImage} alt="product-img" className={classes.productImage} />
            <div className={classes.priceRow}>
               <span className={classes.price} >{price}€</span>
               <div>
                  <img src={profileThumb} alt="profile-icon" className={classes.profileIcon} />
                  <span style={{paddingRight: 10}} >{name}</span>
               </div>
            </div>
         </div>
         <div className={classes.productInfo}>
            <p><strong>Description: </strong>{description}</p>
            <p><strong>Duration: </strong>{duration}</p>
            <p><strong>Audience size: </strong>{audienceSize}</p>
         </div>
      </ProductCard>
   );
}

export default Product;