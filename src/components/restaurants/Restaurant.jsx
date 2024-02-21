import { useDispatch, useSelector } from "react-redux";
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { displayMenuItems } from "../../User/reducers/Admin";
import swal from "sweetalert";
import { addCartItem, removeCartItem } from "../../User/reducers/Auth";

const Restaurant=()=>{
    const restaurants=useSelector((state)=>state.superadmin.restaurants);
    const [quantity,setQuantity]=useState(0);
    const { restaurantId } = useParams();
    const [itemId,setItemId]=useState();
    const jwt=localStorage.getItem("jwt");
    const [data,setData]=useState({
        email:localStorage.getItem("email"),
        id:""
    })
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(displayMenuItems(restaurantId));
    },[])
    const foods=useSelector((state)=>state.admin.menu);
    const cartData=useSelector((state)=>state.register.cartItems);
    console.log(foods);
    console.log(restaurants);
    const handleAdd=(id)=>{
        setItemId(id);
        setData({...data,id:itemId});
        if(jwt==null){
            swal({
                text:"Login to Your Account",
                icon:"warning"
            })
        }
        else{
        setQuantity(quantity+1);
        dispatch(addCartItem(data));
        }
    }
    const handleRemove=(id)=>{
        setItemId(id);
        setData({...data,id:itemId});
        setQuantity(quantity-1);
        dispatch(removeCartItem(data));
    }
return(
    <div className="p-0">
    <Navbar/>
    <div className="h-20 w-full"></div>
    <div className="h-screen mt-16">
        <div className="w-7/12 border-b-2 border-gray-400 mt-24 mx-auto">
            {/* <div className="text-lg font-bold">{restaurants.name}</div>
            <div>{restaurants.cuisine}</div>
            <div>{restaurants.area}</div> */}
            <div className="font-bold text-2xl font-sans mb-6">Menu</div>
        </div>
        <div className="mt-6 w-7/12 mx-auto">
            {foods && foods.map((food)=>{
                return(
                    <div className=" border-b-2 border-gray-400">
                    <div key={food.id} className="mb-4">
                        <div className="flex flex-row">
                        <div className="mt-8"><h2>{food.name}</h2><p>₹{food.price}</p></div>
                        <div>
                        <img src={food.imageUrl} className="ml-96 w-32 rounded" height="100"/></div>
                        </div>
                        
                    </div>
                    <div className="border rounded border-gray-400 bg-white-900 w-24 h-12 p-1 mt-2 mb-4"><button className="font-bold text-3xl text-[#60b246] mr-4 ml-2" onClick={()=>handleRemove(food.id)} type="button">-</button><button className="font-bold  text-[#60b246] text-3xl ml-2" onClick={()=>handleAdd(food.id)} type="button">+</button></div></div>
                )
            })}        
        </div>
    </div>
    <Footer/>
    </div>
)
}
export default Restaurant;