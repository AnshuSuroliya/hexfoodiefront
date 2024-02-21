import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { displayDefault } from "../../User/reducers/SuperAdmin";
import { Link } from "react-router-dom";

const Content=()=>{
    const dispatch=useDispatch();
    const [id,setId]=useState();
    useEffect(()=>{
        dispatch(displayDefault());
    },[])
const restaurants=useSelector((state)=>state.superadmin.restaurants)
return(
    <div className="flex justify-center h-screen z-1">
        <div className="w-8/12">
        <div className="text-black font-bold text-2xl mt-24">Restaurants with online food delivery</div>
        <div className="mt-12 grid grid-cols-1 gap-x-44 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {restaurants && restaurants.map((restaurant)=>{ 
              return(
                  <div key= {restaurant.id} className="h-80  shadow-xl border-1  transition ease-in duration-500">
                    <div className="rounded-full object-contain">
                    <Link to={`/menu/${restaurant.id}`}>
                      <img
                        src={restaurant.imageUrl}
                        //alt={product.imageAlt}
                        className="object-contain w-full h-48 rounded object-scale-up" height="100" 
                      />
                     </Link>
                    </div>
                    <div className="mt-2 flex justify-between ml-2">
                        <h3 className="font-bold">
                           
                            <span aria-hidden="true" className="font-serif" />
                            {restaurant.name}
                            
                        </h3>
                        
                    </div>
                    <p className="text-sm ml-2">{restaurant.cuisine}</p>
                    <p className="text-sm ml-2 mb-2">{restaurant.area}</p>
                  </div>
                  )
            
            })}
          </div>
          </div>
    </div>
)
}
export default Content;