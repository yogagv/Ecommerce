import React from 'react'
import './Popularpro.css'
import data_product from '../Assests/data'
import Item from '../Item/Item'

const Popularpro = () => {
  return (
    <div className='popularpro'>
      <h1>POPULAR IN MEN</h1>
      <hr />
      <div className='popular-item'>
      {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      })}
      </div>
    </div>
  )
}

export default Popularpro
