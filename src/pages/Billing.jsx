import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Billing = () => {
  let {id} = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then(x=>setProduct(x.data))
    .catch(err=>console.log(err))
  },[])
  function increment(){
    setQuantity(quantity+1)
  }

  function decrement(){
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }
  return (
    <>
    <Navbar/>
    <img src={product.img} height={"200px"} alt="" />
    <h2>Price: {product.price}.00</h2>
    <button onClick={decrement}>Decrement</button>
    <h2>{quantity}</h2>
    <button onClick={increment}>Increment</button>
    </>
  )
}

export default Billing