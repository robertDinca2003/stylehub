import Product from "./Product";
import pants from "../assets/FeateredProducts/pantsFeatured.png";
import sneakers from "../assets/FeateredProducts/sneakersFeatured.jpeg";
import shirt from "../assets/FeateredProducts/tshirtFeatured.jpeg";
import { useEffect,useState } from "react";




export const Featured = () => {

    const [data,setData] = useState([]);
    const [filter,setFilter] = useState();
    const [prod1,setProd1] = useState();
    const [prod2,setProd2] = useState();
    const [prod3,setProd3] = useState();
    const [loading, setLoading] = useState(false);

    let componentMounted = true ;

    useEffect(()=>{
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products/2");
            const response2 = await fetch("https://fakestoreapi.com/products/16");
            const response3 =await fetch("https://fakestoreapi.com/products/5")
            if(componentMounted)
                {setData(await response.clone().json());
                 

                 setProd1(await response.clone().json());
                 setProd2(await response2.clone().json());
                 setProd3(await response3.clone().json());
                 setLoading(false);
                 console.log(prod1, prod2, prod3);}
            
                
        }

        getProducts();
        
    },[])


    const Prod = () => {
        return(
            <div className="grid   grid-rows-3 grid-cols-1 gap-10 lg:gap-0 lg:grid-rows-1 lg:grid-cols-3 justify-items-center items-center mt-[3vh] md:mt-[10vh] lg:mt-[20vh]  w-[90%]">
                <Product className="" image={prod1?.image } route="products/2" description="T-shirt oversize good quality material" price={`${prod1?.price } $`} title="Classy T-Shirt"/>
                <Product className="" image={prod2?.image} route="products/16" description={prod2?.title} price={`${prod2?.price} $`} title= {"Woman Jacket"}/>
                <Product className="" image={prod3?.image} route="products/5" description="Sneakers modern style" price={`${prod3?.price} $`} title= {"Dragon Bracelet"}/>
            </div>
        );
    }

    const Load = () =>{
        return(
            <div className="">
                <h1 className="text-6xl">
                    Loading...
                </h1>
            </div>
        )
    }

    return(
        <div className="bg-[url('assets/Featured2.png')] bg-cover min-h-screen flex flex-col items-center justify-center">
            <div>
                <h1 className="mt-10 text-5xl xsm:text-7xl font-bold text-orange-950">Featured Product</h1>
                <h2 className="text-amber-400 italic text-2xl xsm:text-3xl mt-10">"Step into a world of style and sophistication with our captivating new collection that seamlessly blends elegance and modernity."</h2>
            </div>
            {componentMounted? <Prod/> : <Load/>}
            

        </div>
    );
}

export default Featured;