import React from 'react'
import data_product from '../Assets/data'
import Item from '../item/Item'
import './RelatedProducts.css'
const RelatedProducts = () => {
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-items">
                {data_product.map((item, i) => {
                    return <Item key={i} name={item.name}  image={item.image} id={item.id} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts