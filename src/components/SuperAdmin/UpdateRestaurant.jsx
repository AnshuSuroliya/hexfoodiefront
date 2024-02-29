import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { displayById, updateRestaurant } from "../../User/reducers/SuperAdmin";

const UpdateRestaurant=()=>{
    const dispatch=useDispatch();
    const {restaurantId}=useParams();
    const [data,setData]=useState({id:restaurantId})
    useEffect(()=>{
        dispatch(displayById(restaurantId));
    },[])
    const restaurant=useSelector((state)=>state.superadmin.restaurantsById);
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updateRestaurant(data));
    }
    const response=useSelector((state)=>state.superadmin.updateData)
    return(
<div>
<Navbar/>
            <div className="h-20 w-full"></div>
            <div className="mt-16 h-screen w-full ">
            <div className="w-6/12 shadow-2xl rounded p-4 mx-auto">
                <h2 className="text-2xl font-bold flex justify-center">Update RESTAURANT</h2>
                <form method="POST" onSubmit={handleSubmit} className="justify-center mx-auto mt-4">
                    <div className="flex justify-center">
                    <input type="text" name="name" className="border-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.name} onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="cuisine" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.cuisine} onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="area" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.area} onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="zipcode" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.zipcode} onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="city" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.city} onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="imageUrl" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.imageUrl} onChange={handleChange}/>
                    </div>
                    {response.success ? <div className="text-green-600 flex justify-center">{response.message}</div>:<div className="text-red-600 flex justify-center">{response.message}</div>}
                    <div className="flex justify-center mt-4">
                        
                    <button className="px-36 py-2 text-white bg-[#fc8019] " type="submit">Submit</button>
                    </div>
                </form>
            </div>
            </div>
            <Footer/>
</div>
    )
}
export default UpdateRestaurant;