/* eslint-disable react/prop-types */
import React from 'react'

const Products = (props)=>{

    const {id,title,price,description,catagory,image,rating}=props
    return(
      <article className="product">
            <img src="" alt="" />
            <div className="product__details">
                <h4 className="product__title">TTitle: {title}</h4>
                <p className='product__price'>Price: {price}</p>
                <p className='product__rating'> Rating: </p>
                <p className="product__desc"> Description:{description} </p>
                <button className="product__btn btn"> Add to cart </button>
            </div>
       </article>
 
    )
}
export default Products