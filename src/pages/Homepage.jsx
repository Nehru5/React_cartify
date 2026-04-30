import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  let navigate = useNavigate()
  return (
    <>
    <Navbar/>
      <div className="hero-section">
        <h1>Welcome to <span style={{color:"orange"}}>Cartify</span>🛒</h1>
        <h2>Discover the best products at unbeatable prices</h2>
        <button style={{cursor:"pointer"}} onClick={()=>{navigate("/productspage")}}>Shop now</button>
      </div>

      <center><h1>Shop by Category</h1></center>

      <div className="products">
        <img src="https://5.imimg.com/data5/SELLER/Default/2022/1/QZ/AO/RT/142262681/istockphoto-1301394040-170667a.jpg" alt="" />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/068/733/167/small/the-apple-products-that-are-on-the-table-uniquely-crafted-for-your-design-needs-photo.jpg" alt="" />
        <img src="https://dalpl.co.in/wp-content/uploads/2024/05/bigstock-Wicker-Basket-With-Assorted-Or-56073449.jpg" alt="" />
      </div>

      
      <div className="products">
        <img src="https://5.imimg.com/data5/SELLER/Default/2022/1/QZ/AO/RT/142262681/istockphoto-1301394040-170667a.jpg" alt="" />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/068/733/167/small/the-apple-products-that-are-on-the-table-uniquely-crafted-for-your-design-needs-photo.jpg" alt="" />
        <img src="https://dalpl.co.in/wp-content/uploads/2024/05/bigstock-Wicker-Basket-With-Assorted-Or-56073449.jpg" alt="" />
      </div>
    </>
  )
}

export default Homepage