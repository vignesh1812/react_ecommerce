import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import "./CSS/ShopCategory.css"
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='Shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p><span>Showing 1-12</span> Out of 36 Products</p>
        <div className="shopcategory-sort">
          <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} name={item.name} image={item.image} id={item.id} new_price={item.new_price} old_price={item.old_price} />
            } else {
              return null;
            }
          })
        }
      </div>
      <div className="shopcategory-loadmore">Explore more</div>

    </div>
  )
}

export default ShopCategory
