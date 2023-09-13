
import { useEffect } from "react";
import Contact from "../components/Contact";
import Products from "../components/ProductInstance";

export const Shop = () => {

    useEffect(()=>{window.scrollTo(0, 0)},[]);

    return (
        <div className="bg-amber-200 pt-[5vh]  ">
            <div className="flex flex-col align-center justify-center items-center" >
                <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold text-white w-[90vw] text-center items-center content-center align center ">Style Hub Store</h1>
                <h2 className="mt-10 italic text-5xl text-amber-400 w-[90vw]">"Discover your signature style"</h2>
            </div>
            <div className="pb-10">
                <Products/>
            </div>
            <Contact />
        </div>
    );

}

export default Shop;