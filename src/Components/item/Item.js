import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
      <Link  className='item-links' to={`/product/${props.id}`}>
       <div className='Item'>
            <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-new-price">
                    ₹{props.new_price}
                </div>
                <div className="item-old-price">
                    ₹{props.old_price}
                </div>
            </div>

        </div>
      </Link> 

      
    )
}

export default Item