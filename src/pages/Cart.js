import { useContext , useEffect, useState} from "react";
import { ShopContext } from "../contexts/shop-context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

    const {cartItems ,addToCart, removeFromCart, saveData} = useContext(ShopContext);
    
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate(); 
    const routeChange = (arg) =>{ 
    let path = arg; 
    navigate(path);
    }



    useEffect(() =>{
        window.scrollTo(0, 0);
        
        const getProduct = async () => {
            setLoading(true);
           window.localStorage.setItem('wakanda', JSON.stringify(cartItems))

            const response = await fetch(`https://fakestoreapi.com/products`);
            setProduct(await response.json());
            setLoading(false);
            console.log(cartItems);
        }
        getProduct();
    },[]);

    const empty = () =>{
        let ok = true;
        for(let i = 1; i<=20; i++)
            if(cartItems[i] !== 0) ok=false;
        return ok;
    }

    const EmptyCart = () => {
            return (
                <div className="flex flex-col gap-5 content-center items-center justify-center p-4 mx-[5%] border-4 rounded-xl border-orange-300">
                        <h1 className="align-center text-4xl sm:text-5xl md:text-7xl font-bold italic text-amber-500">Empty Cart</h1>
                        <Link to="/shop" className="max-h-[10vh] border-4 border-orange-400 text-xl sm:text-2xl md:text-4xl align-center text-white p-2 bg-amber-400 hover:bg-orange-400 rounded-xl font-bold">Back to shop</Link>
                </div>
            )
    }

    const TotalPrice = () => {
        let price = 0;
        product.map((product,key)=>{price+=product.price * cartItems[product.id]});
        
        return price.toFixed(2);
    }

    const checkOut = () => {
        let price = TotalPrice();
        if(price >= 1)
        {
            console.log(price === 0.00);
            routeChange(`checkout`);
        }
        else{
            alert("Empty cart");
        }
    }

    return (
        <div className="pt-[100px] pb-[50px]">
            <h1 className="text-amber-500 text-4xl md:text-6xl lg:text-7xl italic font-bold ">Your Shopping Cart</h1>
            <div className="flex flex-col flex-wrap justify-start gap-5 mt-[10vh] mx-[5%]">
            {empty()&& EmptyCart()}
            {product.map(
                (product, key) =>{
                    if(cartItems[product.id] !==0)
                    return(
                    <div className="px-[5%] py-2 flex min-h-[10vh] gap-2 text-xl flex-row justify-between items-center rounded-lg border-8 border-orange-400">
                        <img  className="w-auto min-h-[10vh] max-h-[12vh] object-fit" src={product.image} alt={product.title} height={600} width={400}/>
                        <h1 className="text-lg md:text-3xl font-bold">{product.title.substring(0,30)}</h1>
                        <div className="flex flex-row gap-3 p-1 sm:p-3  border-4 rounded-xl border-orange-400">
                            <button className="text-lg sm:text-xl md:text-3xl font-bold"  onClick={() => (addToCart(product.id))}>+</button>
                            <h4 className="text-lg sm:text-xl md:text-3xl font-bold">{cartItems[product.id]}</h4>
                            <button className="text-lg sm:text-xl md:text-3xl font-bold"  onClick={() => (removeFromCart(product.id))}>-</button>
                        </div>

                    </div>);
                }
            )}
            </div>
            <div className="flex flex-col md:flex-row mx-[10%] pt-[2%] justify-between">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Total price: {TotalPrice()} $</h1>
                <button onClick={checkOut} className="border-4 border-orange-400 p-2 text-3xl font-bold rounded-lg text-white bg-amber-400 hover:bg-orange-400">Check out</button>
            </div>
        </div>
    );

}

export default Cart;