import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";

const Search=()=>{
    return(
        <div>
            <Navbar/>
            <div className="h-screen z-1">
            <div className="h-20 w-full"></div>
                <div className="w-7/12 mt-16 flex justify-center border-2 border-gray-400 ml-72">
                    <input type="text" placeholder="Search for Restaurants and Food" maxLength="36" className="w-10/12 h-12 focus:outline-none p-2"/>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Search;