import React, {useState, useEffect} from 'react';
import Skeleton from "react-loading-skeleton";
import { NavLink } from 'react-router-dom';
const Products = () => {

    const [data,setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true ;
    const allProducts = (cat) =>{
        const updatedList = data.filter((x) => x.category !== cat);
        setFilter(updatedList);
    }

    useEffect(()=>{
        const getProducts = async () => {
           window.scrollTo(0, 0);
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            
            if(componentMounted)
                {setData(await response.clone().json());
                 

                 setFilter(await response.clone().json());
                 setLoading(false);
                 console.log(filter);}
            
            return () =>{
                componentMounted = false;
            }
        }

        getProducts();
        allProducts("electronics");
    },[])

    const Loading = () =>{
        return(
            <div>
               <Skeleton height={600} />
               <Skeleton height={600} />
               <Skeleton height={600} />
            </div>
        )
    };

    const filterProduct = (cat) =>{
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };
    
    const ShowProducts = () => {
        return(
        <div className='flex flex-col  justify-center align-center flex-wrap'>

          <div className='buttons inline-flex flex-col md:flex-row gap-2 justify-center '>
            <button className='rounded-lg bg-white border-orange-300 border-2 text-2xl px-7 hover:bg-orange-200 hover:text-white' onClick={() => allProducts("electronics")}>All</button>
            <button className='rounded-lg bg-white border-orange-300 border-2 text-2xl px-7 hover:bg-orange-200 hover:text-white' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
            <button className='rounded-lg bg-white border-orange-300 border-2 text-2xl px-7 hover:bg-orange-200 hover:text-white' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
            <button className='rounded-lg bg-white border-orange-300 border-2 text-2xl px-7 hover:bg-orange-200 hover:text-white' onClick={() => filterProduct("jewelery")}>Jewellery</button>
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-3  md:gap-5 lg:gap-10 mt-8 justify-center justify-items-center mx-0  lg:mx-[10vw]'>

          
          {filter.map((product) =>{
            if(product.category !== 'electronics')
            return(
                
                <div className='shadow-2xl rounded-xl bg-white border-4 border-orange-200 flex flex-col h-[50vh] md:min-h-[35vh] md:max-h-[35vh] w-[85vw] md:w-[100%] xl:w-[90%]  lg:gap-4 p-4 justify-center align-center content-center flex-wrap'>
                    <div className='card grid grid-cols-1 gap-3 sm:gap-0 bg-white justify-center items-center align-center content-center '>
                        <img src={product.image} alt={product.title} width={400} height={600} className='object-contain justify-self-center h-[20vh] align-center'/>
                        <h2 className='h-[5vh]   text-md sm:text-xl px-3'>{product.title.substring(0,20)}</h2>
                        <p className=' text-lg sm:text-xl font-bold '>{product.price}$</p>
                        <NavLink to={`/products/${product.id}`} className='bg-orange-300 text-white text-2xl px-5 rounded-xl border-2 border-orange-500 hover:bg-orange-400 '>Buy Now</NavLink>
                    </div>
                </div>
                
            )
          })}
          </div>
        </div>
        
       
        );
    };

    return (
        <div>
            <div className='container mx-auto my-5 py-5'>
                <div className=''>
                    <div className=''>
                        <h1 className='text-5xl italic text-white'>Latest Product</h1>
                        <hr className='mt-2 '/>
                    </div>
                </div>
                <div className='flex flex-row justify-center mt-5'>
                    {loading? <Loading/>: <ShowProducts/>}
                </div>
            </div>
        </div>
    );
}

export default Products;