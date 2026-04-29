import React,{useState,useEffect} from 'react'
import Navbar from "../components/Navbar"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Productdetail = () => {
  let {id} = useParams()
  let navigate = useNavigate()
  const [product,setProduct] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then(x=>setProduct(x.data))
    .catch(err=>console.log(err))
  },[])

  function handleNavigate(id){
    navigate(`/billing/${id}`)
  }
  return (
    <>
    <Navbar/>
    <img src={product.img} height={"300px"} alt="" />
    <h2>{product.name}</h2>
    <h2>Price: {product.price}.00</h2>
    <h2>Description: {product.price}</h2>
    <h2>Ratings: ⭐{product.ratings}/5</h2>
    <button onClick={()=>{handleNavigate(product.id)}}>Place order</button>
    </>
  )
}

export default Productdetail