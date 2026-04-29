import React,{useEffect, useState} from 'react'
import Navbar from "../components/Navbar"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Productspage = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then(x=>setProducts(x.data))
    .catch(err=>console.log(err))
  },[])

  function handleNavigate(id){
    navigate(`/productdetail/${id}`)
  }
  return (
    <>
    <Navbar/>
    <center><h1 style={{backgroundColor:"orange"}}>Products</h1></center>

    <div id="products">
      {products.map((x)=>{
      return <div className='cards'>
      
          <img height={"250px"} width={"250px"} src={x.img} alt="" />
        <h2>{x.name}</h2>
        <button onClick={()=>{handleNavigate(x.id)}}>View Product</button>``
        </div>
      
    })}
    </div>
    </>
  )
}

export default Productspage