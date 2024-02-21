import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";

const AddRestaurant=()=>{
    const [data,setData]=useState({});
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{

    }
    return(
        <div className="">
            <Navbar/>
            <div className="mt-16 h-screen w-full flex justify-center">
            <div className="w-6/12 h-80 flex justify-center shadow-2xl rounded">
                <h2 className="text-2xl font-bold">Add Restaurant</h2>
                <form method="POST" onSubmit={handleSubmit}>
                    <input type="text" name="name" className="border-2 border-gray-400 w-44 h-12" placeholder="Name" onChange={handleChange}/>
                    <input type="text" name="area" className="border-2 border-gray-400 w-44 h-12" placeholder="Area" onChange={handleChange}/>
                    <input type="text" name="zipcode" className="border-2 border-gray-400 w-44 h-12" placeholder="Zipcode" onChange={handleChange}/>
                    <input type="text" name="city" className="border-2 border-gray-400 w-44 h-12" placeholder="City" onChange={handleChange}/>
                    <input type="text" name="imageUrl" className="border-2 border-gray-400 w-44 h-12" placeholder="ImageUrl" onChange={handleChange}/>
                    <button className="p-2 text-white bg-[#fc8019]" type="submit">Submit</button>
                </form>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AddRestaurant;