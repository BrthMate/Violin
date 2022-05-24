import React from 'react'
import "./price.css"

const Price = (props) => {
  return (
    <div className='card-body'>
      <div className="card-content">
        <div className="card-title">
            {props.type}
        </div>
        <div className="card-type">
            {props.desc}<br></br>{props.price}
        </div>
      </div>
      <button className='btn-card'>Order</button>
    </div>
  )
}

export default Price