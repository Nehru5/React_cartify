import React,{useEffect, useState} from 'react'
import Navbar from "../components/Navbar"
import axios from 'axios'
const Productspage = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then(x=>setProducts(x.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <>
    <Navbar/>
    <center><h1 style={{backgroundColor:"orange"}}>Products</h1></center>

    <div id="products">
      {products.map((x)=>{
      return <div className='cards'>
      
          <img height={"250px"} width={"250px"} src={x.img} alt="" />
        <h2>{x.name}</h2>
        <button>View Product</button>``
        </div>
      
    })}
    </div>
    </>
  )
}

export default Productspage