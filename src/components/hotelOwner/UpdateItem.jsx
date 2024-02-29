import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFoodById, updateItem } from "../../User/reducers/Admin";

const UpdateItem=()=>{
    const dispatch=useDispatch();
    const {foodId}=useParams();
    const [data,setData]=useState({id:foodId});
   
    useEffect(()=>{
        dispatch(getFoodById(foodId));
    },[])
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
        dispatch(updateItem(data));
    }
    const food=useSelector((state)=>state.admin.foodById);
    const response=useSelector((state)=>state.admin.updateData);
    return(
    <div>
         <Navbar/>
            <div className="h-20 w-full"></div>
            <div className="mt-16 h-screen w-full ">
            <div className="w-6/12 shadow-2xl rounded p-4 mx-auto">
                <h2 className="text-2xl font-bold flex justify-center">UPDATE MENU FOOD ITEM</h2>
                <form method="POST" onSubmit={handleSubmit} className="justify-center mx-auto mt-4">
                    <div className="flex justify-center">
                    <input type="text"  name="name" className="border-2 border-gray-400 w-80 h-12 p-4" placeholder={food && food.name} onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="category"  className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={food && food.category} onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="price" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={food && food.price} onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="imageUrl"  className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={food && food.imageUrl} onChange={handleChange}/>
                    </div>
                    
                    <div className="flex justify-center mt-4">
                        {response.success ? <div className="text-green-600">{response.message}</div>:<div className="text-red-600">{response.message}</div>}
                    </div>
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
export default UpdateItem;