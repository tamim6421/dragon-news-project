import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategory] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then( res => res.json())
        .then( data => setCategory(data))
    
    } ,[])
    // console.log(categories)
    return (
        <div>
            <div>
            <h2 className=" text-2xl p-3  mb-3 text-center font-semibold">All Category: {categories.length}</h2>
            <p className="bg-gray-100 text-center py-3 text-xl font-semibold mb-3">National News</p>
            {
                categories.map( category => <NavLink
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-gray-700" : ""
                  } 
                    
                    to = {`/category/${category.id}`}
                 key={category.id}>
                    
                    <li className=" list-none ml-10 hover:text-gray-700 text-lg mb-6 font-semibold text-gray-500">{category.name}</li>
                </NavLink>)
            }
            </div>

            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
          
        </div>
    );
};

export default LeftSideNav;