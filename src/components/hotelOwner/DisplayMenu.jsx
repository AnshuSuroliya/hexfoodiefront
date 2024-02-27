import { useDispatch } from "react-redux";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import { useEffect } from "react";
import { displayMenu } from "../../User/reducers/Admin";

const DisplayMenu=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(displayMenu())
    })
    return(
        <div className="overflow-x-hidden">
            <Navbar/>
            <div className="h-20 w-full"></div>
            <div className="w-full ml-16">

            </div>
            <Footer/>
        </div>
    )
}
export default DisplayMenu;