import React, {useState,useEffect, useContext} from "react";

import { Link, useParams } from "react-router-dom";

import { ShopContext } from "../contexts/shop-context";

export const ProductPage = () => {

    
        const {id} = useParams();
        const [product, setProduct] = useState([]);
        const [loading, setLoading] = useState(false);

        const {cartItems,addToCart} = useContext(ShopContext);

        useEffect(() =>{
            const getProduct = async () => {
                setLoading(true);
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                setProduct(await response.json());
                setLoading(false);
            }
            getProduct();
        },[]);

        const Loading = () => {
            return (<h1>Loading...</h1>)
        }
        const ShowProduct = () => {
            return(
              <div className="bg-yellow-100">
                    <div className="min-h-screen py-[100px] flex flex-wrap flex-row flex-cols-2 flex-rows-1 justify-center gap-10 mx-[5vw] md:mx-[10vw] content-center align-center text-start">
                        <img src={product.image} alt={product.title} height={600} width={400} className="border-4 rounded-xl  object-fit"/>
                        <div className="border-4 rounded-xl p-5  lg:ml-12 lg:ml-20 flex flex-wrap flex-col justify-center  content-center">
                            <h2 className="text-gray-500 text-3xl">{product.category}</h2>
                            <h1 className="lg:text-5xl md:text-2xl">{product.title}</h1>
                            <h4 className="my-5 text-3xl font-bold italic">{product.price}$</h4>
                            <hr/>
                            <h5 className="my-2 text-lg">{product.description}</h5>
                            <hr/>
                            <div className="mt-5  flex justify-center gap-4 flex-wrap">
                                <button className="rounded-lg border-2 border-black px-2 text-lg hover:bg-orange-300 hover:text-white"onClick={()=>{addToCart(product.id)}} >Add to cart {cartItems[product.id] !== 0&& `(${cartItems[product.id]})`}</button>
                                <Link to="/cart" className="rounded-lg border-2 border-black px-2 text-lg hover:bg-orange-300 hover:text-white">Go to cart</Link>
                            </div>
                        </div>
                    </div>
              </div>  
            );
        }
    return (
        <div className="h-screen">
            <div>
                {loading ? <Loading/> : <ShowProduct/> }
            </div>
        </div>
    )

};

export default ProductPage;