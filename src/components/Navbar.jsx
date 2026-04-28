import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
          <h2>Cartify</h2>
        </div>

        <div className="right">
          <Link to={"/"}><h2>Home</h2></Link>
          <Link to={"/productspage"}><h2>Products</h2></Link>
          <h2>Orders</h2>
        </div>
      </div>
    </>
  )
}

export default Navbar