import { useState } from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
const [search, setsearch] = useState("")

    return ( 
     <nav class="grid sm:grid-cols-3 sm:h-full px-2  bg-gray-200 py-2 " >
    <h1 class=" text-xl text-green-400 font-medium hover:bg-green-400 hover:text-white
    p-2 rounded transition ease-linear duration-500 inset-x-0 bottom-0" 
    >Movie Rater</h1>
    <div class="left-0 " >
    <Link to="/"><a
     class="inline-block border-b-4 hover:border-green-400 text-xl font-medium mx-2
     transition ease-linear duration-300 " 
    >Main</a></Link>
    <Link href="/about"><a
    class="inline-block border-b-4 hover:border-green-400 text-xl font-medium mx-2
    transition ease-linear duration-300 " 
    >About</a></Link>
    <Link to="/add" 
    // to ={{
    //   pathname: "/create", 
    //   query: { 
    //       pid:pid
    //   }
    //  }}
     ><a
    class="inline-block border-b-4 rounded-sm hover:border-green-400 text-xl font-medium mx-2
    transition ease-linear duration-300 " 
    >Add</a></Link>

    <form class="inline-block pl-1" >
    <input placeholder="search for a project..." onChange={(e)=>{setsearch(e.target.value)}} 
    class="border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 p-1 
    focus:border-transparent  shadow appearance-none  rounded w-2/3 mr-2 text-grey-darker"/>
<button class="bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 
text-white  rounded font-meduim p-1 text-xl"
// onClick={(e)=>  {
// e.preventDefault()
// router.push({
// pathname: '/',
// query: { search: search }
// }) 
// setsearch('')}
// } 
>
Find  </button>
    </form>
    </div>
</nav>
);
}
 
export default Navbar;