import { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurant } from "../../User/reducers/SuperAdmin";
import swal from "sweetalert";
import { Navigate, useNavigate } from "react-router-dom";

const AddRestaurant=()=>{
    const [data,setData]=useState({});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addRestaurant(data));
    }
    const response=useSelector((state)=>state.superadmin.addData);
    const popup=()=>{
        swal({
            text:"Restaurant Added",
            icon:"success"
        }).then((value)=>{
            navigate("/");
        })
    }
    return(
        <div className="">
            <Navbar/>
            <div className="h-20 w-full"></div>
            <div className="mt-16 h-screen w-full ">
            <div className="w-6/12 shadow-2xl rounded p-4 mx-auto">
                <h2 className="text-2xl font-bold flex justify-center">ADD RESTAURANT</h2>
                <form method="POST" onSubmit={handleSubmit} className="justify-center mx-auto mt-4">
                    <div className="flex justify-center">
                    <input type="text" name="name" className="border-2 border-gray-400 w-80 h-12 p-4" placeholder="Name" onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="cuisine" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder="Cuisine" onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="area" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder="Area" onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="zipcode" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder="Zipcode" onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="city" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder="City" onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="imageUrl" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder="ImageUrl" onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center mt-4">
                        {response.success ? <div>{popup()}</div>:<div className="text-red-600">{response.message}</div>}
                    <button className="px-36 py-2 text-white bg-[#fc8019] " type="submit">Submit</button>
                    </div>
                </form>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AddRestaurant;