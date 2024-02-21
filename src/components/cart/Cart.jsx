import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import "../nav/SidebarLeft.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayCart } from "../../User/reducers/Auth";

const Cart=()=>{
    const [show,setShow]=useState(false);
    const [data,setData]=useState({});
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(displayCart(localStorage.getItem("email")));
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
    
    }
    const cart=useSelector((state)=>state.register.cartData);
    return(
    
        <div>
            {
                show ? <div className="modalBackgroundLeft absolute transition duration-400">
                <div className="modalContainerLeft">
                <button onClick={()=>setShow(false)} type="button" className="mt-10 text-2xl ml-80">X</button>
                  <div className="flex w-full">
                  <div className="text-3xl mt-10 ml-4 font-serif">Address</div>
                  </div>
                  <div className="mt-12 ml-4">
                    <form method="POST" className="max-w-md" onSubmit={handleSubmit}>
                    <input type="text" name="addressLine1" maxLength="36" placeholder="Address Line1" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-2 border-gray-400 focus:outline-none p-4"/>
                    <input type="text" name="addessLine2" maxLength="36" placeholder="Address Line2" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4"/>
                    <input type="text" name="city" maxLength="36" placeholder="City" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4"/>
                    <input type="text" name="state" maxLength="36" placeholder="State" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4"/>
                    <input type="text" name="zipcode" maxLength="36" placeholder="Zipcode" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4"/>
                    <button className="w-80 bg-[#fc8019] text-white mt-6 p-3" type="submit">Order</button>
                    </form>
                  </div>
                </div>
              </div> : <div></div>
            }
            <Navbar/>
            <div className="h-20 w-full"></div>
            <div className="h-screen bg-[#e9ecee] w-full flex justify-center">
                {/* <div className="w-7/12 h-64 bg-white mt-16 ml-12 shadow-xl"><h2 className="text-xl font-bold ml-4 mt-10">Address</h2>
                <div className="flex">
                <p className="ml-4 text-gray-500 mr-64">Enter Your Delivery Address.</p>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"/>
                </div>
                <button className="px-4 py-2 border border-[#60b246] ml-4 text-[#60b246]" onClick={()=>setShow(true)}>ADD ADDRESS</button>
                </div> */}
                <div className="w-4/12 h-4/6 bg-white ml-16 mt-16 p-4 shadow-xl mr-4">
                    <div className="border-b-2 border-black">
                        <h2>Bill Details</h2>
                        <div className="flex mt-2">
                            <div className="mr-44">Item Total</div>
                            <div>₹{cart.totalPrice}</div>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="font-bold font-sans mr-48">
                            To PAY
                        </div>
                        <div>
                        ₹{cart.totalPrice}
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                    <button className="bg-[#fc8019] px-4 py-2 text-white w-44" onClick={()=>setShow(true)}>Continue</button>
                    </div>
                </div>
            </div>
            {/* <div className="h-screen mt-16">
                <div className="w-full mt-44 text-2xl flex justify-center font-sans font-bold">Your cart is empty</div>
                <div className="flex justify-center mt-2">You can go to home page to view more restaurants</div>
                <div className="w-full flex justify-center mt-4"><Link className="p-2 px-4 bg-[#fc8019] text-white" to="/">SEE RESTAURANTS NEAR YOU</Link></div>
            </div> */}
            <Footer/>
        </div>
    )
}
export default Cart;