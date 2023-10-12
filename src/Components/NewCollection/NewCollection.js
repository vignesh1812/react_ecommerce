import React from 'react'
import './NewCollection.css';
import new_collection from '../Assets/new_collections';
import Item from '../item/Item';
const NewCollection = () => {
  return (
    <div className='new-collection'>
         <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="new-collection-item">
            {new_collection.map((item,i)=>{
                return <Item key={i} name={item.name} image={item.image} id={item.id} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection