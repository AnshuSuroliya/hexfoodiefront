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
    const [message,setMessage]=useState("");
    const [message1,setMessage1]=useState("");
    const [message2,setMessage2]=useState("");
    const [message3,setMessage3]=useState("");
    const [message4,setMessage4]=useState("");
    const [message5,setMessage5]=useState("");
    const [valid,setValid]=useState(true);
    const rgExp=/^[a-zA-Z.' ]{1,}$/;
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        if(rgExp.test(e.target.value))
            {
              setMessage("")
              setValid(true);
            }
            
            else if(!rgExp.test(e.target.value))
            {
              setMessage("Name contains alphabets only")
              setValid(false);
            }
            else{
              setMessage("");
            }
      }
      const handleChange1=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        if(rgExp.test(e.target.value))
            {
              setMessage1("")
              setValid(true);
            }
            
            else if(!rgExp.test(e.target.value))
            {
              setMessage1("Cuisine contains alphabets only")
              setValid(false);
            }
            else{
              setMessage1("");
            }
      }
      const handleChange2=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        if(rgExp.test(e.target.value))
            {
              setMessage2("")
              setValid(true);
            }
            
            else if(!rgExp.test(e.target.value))
            {
              setMessage2("Area contains alphabets only")
              setValid(false);
            }
            else{
              setMessage2("");
            }
      }
      const rgExp2=/^[1-9]\d{5}$/
      const handleChange3=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        if(rgExp2.test(e.target.value))
            {
              setMessage3("")
              setValid(true);
            }
            
            else if(!rgExp2.test(e.target.value))
            {
              setMessage3("Zipcode contains numbers only")
              setValid(false);
            }
            else{
              setMessage3("");
            }
      }
      const handleChange4=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        if(rgExp.test(e.target.value))
            {
              setMessage4("")
              setValid(true);
            }
            
            else if(!rgExp.test(e.target.value))
            {
              setMessage4("City contains alphabets only")
              setValid(false);
            }
            else{
              setMessage4("");
            }
      }
      const handleChange5=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
      }
    const restaurant=useSelector((state)=>state.superadmin.restaurantsById);
    
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
                <h2 className="text-2xl font-bold flex justify-center">UPDATE RESTAURANT</h2>
                <form method="POST" onSubmit={handleSubmit} className="justify-center mx-auto mt-4">
                    <div className="flex justify-center">
                    <input type="text" name="name" className="border-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.name} onChange={handleChange}/>
                    
                    </div>
                    <p className="text-red-600 text-xs italic flex justify-center">{message}</p>
                    <div className="flex justify-center">
                    <input type="text" name="cuisine" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.cuisine} onChange={handleChange1}/>
                    
                    </div>
                    <p className="text-red-600 text-xs italic flex justify-center">{message1}</p>
                    <div className="flex justify-center">
                    <input type="text" name="area" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.area} onChange={handleChange2}/>
                
                    </div>
                    <p className="text-red-600 text-xs italic flex justify-center">{message2}</p>
                    <div className="flex justify-center">
                    <input type="text" name="zipcode" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.zipcode} onChange={handleChange3}/>
                    
                    </div>
                    <p className="text-red-600 text-xs italic flex justify-center">{message3}</p>
                    <div className="flex justify-center">
                    <input type="text" name="city" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.city} onChange={handleChange4}/>
                    
                    </div>
                    <p className="text-red-600 text-xs italic flex justify-center">{message4}</p>
                    <div className="flex justify-center">
                    <input type="text" name="imageUrl" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder={restaurant && restaurant.imageUrl} onChange={handleChange5}/>
                    </div>
                    {response.success ? <div className="text-green-600 flex justify-center">{response.message}</div>:<div className="text-red-600 flex justify-center">{response.message}</div>}
                    <div className="flex justify-center mt-4">
                        
                    <button className={`px-36 py-2 text-white bg-[#fc8019] ${!valid ? 'opacity-50 cursor-not-allowed hover:none' : ''}`} type="submit" disabled={!valid}>Submit</button>
                    </div>
                </form>
            </div>
            </div>
            <Footer/>
</div>
    )
}
export default UpdateRestaurant;