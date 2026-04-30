import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Billing = () => {
  let {id} = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  let navigate = useNavigate()
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

  function order(e){
    e.preventDefault()
    let orderData = {
      productId:product.id,
      productName:product.name,
      productPrice:product.price,
      productImage:product.img,
      productQuantity:quantity,
      totalPrice:product.price*quantity,
      customer:{
        name:name,
        email:email,
        phone:phone,
        address:address
      },
      date:new Date().toLocaleString(),
      status:"pending"
    }
    axios.post("http://localhost:3000/orders",orderData)
    .then(()=>{
      toast.success("Order placed successfully🎉")
      navigate("/productspage")
    })
    .catch(err=>console.log(err))
  }
  return (
    <>
    <Navbar/>
    <img src={product.img} height={"200px"} alt="" />
    <h2>Price: {product.price}.00</h2>
    <button onClick={decrement}>Decrement</button>
    <h2>{quantity}</h2>
    <button onClick={increment}>Increment</button>
    <center>
      <form action="" onSubmit={order}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />
        <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
        <input type="text" placeholder='Phone number' value={phone} onChange={(e)=>{setPhone(e.target.value)}} /> <br />
        <textarea placeholder='Enter address' value={address} onChange={(e)=>{setAddress(e.target.value)}} ></textarea> <br />
        <button>Order</button>
      </form>
    </center>
    </>
  )
}

export default Billing