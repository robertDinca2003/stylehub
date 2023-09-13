import { useEffect,useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../contexts/shop-context";
export const CheckOut = () => {

    const {cartItems ,addToCart, removeFromCart} = useContext(ShopContext);

    const [data,setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const [orderInfo, setOrderInfo] = useState({city:"", county:"", street:"", appartment:"", phone:"", email:"", payment:0});

    let componentMounted = true ;
    
    const TotalPrice = () => {
        let price = 0;
        filter.map((product,key)=>{price+=product.price * cartItems[product.id]});
        
        return price.toFixed(2);
    }
    
    useEffect(()=>{
        window.scrollTo(0, 0);
        
        

        const getProducts = async () => {
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
        
    },[])

    const checkSubmit = (e) => {
            e.preventDefault();
            let notif = "";
            if(orderInfo?.city?.length <= 0){notif = notif.concat("Add City, "); }
            if(orderInfo?.county?.length <= 0){notif = notif.concat("Add county, ");}
            if(orderInfo?.street?.length <= 0){notif = notif.concat("Add street, ");}
            if(orderInfo?.phone?.length <= 0){notif = notif.concat("Add phone, ");}
            if(orderInfo?.email?.length <= 0){notif = notif.concat("Add email, ");}
            if(orderInfo?.payment === 0){notif = notif.concat("Add payment method, ");}
            
            let  ok = 1;
            let i = 0;
            for(i; i < orderInfo?.email?.length; i++)
                if(orderInfo?.email[i] === '@')break;
            let j = i;
            if(i === 0 || i === orderInfo?.email?.length) {ok=0;}
            for(i; i<orderInfo?.email?.length; i++)
                if(orderInfo?.email[i] === '.')break;
            if( j+1 === i || i === 0 || i === orderInfo?.email?.length) ok= 0;
            if(ok === 0 && orderInfo?.email?.length > 0) {notif = notif.concat("Wrong email, ");}
            if(orderInfo?.phone?.length !== 0 && orderInfo?.phone?.length !== 10){notif = notif.concat("Wrong phone number, ");}
            if(TotalPrice() < 1) notif = "Empty cart!";
            if(notif.length === 0) notif = "Succes!";
        
            alert(notif);
    }

    return(
        <div className="bg-amber-300 pb-[5vh] min-h-screen flex flex-wrap flex-col gap-5 pt-[100px]">
            <div className=" text-white text-7xl italic font-bold">
                <h1 >Place Your Order</h1>
            </div>
            <div className="flex flex-wrap  flex-col gap-5 mx-[5%] border-4 border-orange-500 bg-white shadow-lg rounded-xl py-5 flex flex-wrap flex-col gap-5">

                {filter.map((product,key)=>{
                    if(cartItems[product.id] !== 0)
                    return (
                        <div className="inline-flex flex-row justify-between mx-[2vw] md:mx-[7vw] text-md sm:text-lg md:text-xl">
                            <h1>{`${cartItems[product.id]}x`}</h1>   
                            <h1>{`${product.title.substring(0,40)}`}</h1>
                            <h1>{`${product.price}$`}</h1>
                        </div>
                    );
                })}
                <h1 className="text-xl">{`Total Price: ${TotalPrice()}$`}</h1>
                <hr className="border-orange-500 border-2"></hr>
                <form onSubmit={(e)=>checkSubmit(e)} className="  rounded-xl py-5 flex flex-wrap flex-col gap-5">
                    <fieldset className="block text-start ml-[7vw] ">
                        <legend className=" text-2xl font-bold">Select payment option</legend>
                        <div className="ml-[1vw] text-xl">
                            <input onChange={() =>{setOrderInfo({...orderInfo, payment:1})}} type="radio" id="ramburs" name="payment" value="ramburs"/> <label>Ramburs</label>
                        </div>
                        <div className="ml-[1vw] text-xl">
                            <input onChange={() =>{setOrderInfo({...orderInfo, payment:-1})}} type="radio" id="ramburs" name="payment" value="card"/> <label>Card</label>
                        </div>
                            
                       
                        
                    </fieldset>
                    <address className="flex flex-col gap-2 justify-start align-start text-start ml-[7vw] ">
                        <legend className="font-bold text-2xl">Billing Adress:</legend>
                        <label className="ml-[1vw] text-xl ">City:</label>
                        <input  className="ml-[2vw] border-2 w-[70vw] lg:w-[25vw] rounded-lg px-4 py-1 border-black" type="text" id="city" placeholder="Bucuresti" value={orderInfo.city} onChange={(e)=>{setOrderInfo({...orderInfo, city:e.target.value})}}/>
                        <label className="ml-[1vw] text-xl ">County:</label>
                        <input className="ml-[2vw] border-2 w-[70vw] lg:w-[25vw] rounded-lg px-4 py-1 border-black" type="text" id="county" placeholder="Ilfov" onChange={(e)=>{setOrderInfo({...orderInfo, county:e.target.value})}}/>
                        <label className="ml-[1vw] text-xl ">Street & Number:</label>
                        <input className="ml-[2vw] border-2 w-[70vw] lg:w-[25vw] rounded-lg px-4 py-1 border-black" type="text" id="street" placeholder="Str. T.Vladimirescu" onChange={(e)=>{setOrderInfo({...orderInfo, street:e.target.value})}}/>
                        <label className="ml-[1vw] text-xl ">Appartmant *optional*:</label>
                        <input className="ml-[2vw] border-2 w-[70vw] lg:w-[25vw] rounded-lg px-4 py-1 border-black" type="text" id="home" placeholder="Bloc B7, 3rd floor, 32" onChange={(e)=>{setOrderInfo({...orderInfo, appartment:e.target.value})}}/>
                    </address>
                    <fieldset className="flex flex-col flex-wrap text-start ml-[7vw]">
                        <legend className="text-2xl font-bold">Contact Infotmation: </legend>
                        <label className="ml-[1vw] text-xl ">Phone Number</label>
                        <input onChange={(e)=>{setOrderInfo({...orderInfo, phone:e.target.value})}} className="ml-[2vw] border-2 w-[70vw] lg:w-[25vw] rounded-lg px-4 py-1 border-black" type="text" placeholder="0755407167"/>
                        <label className="ml-[1vw] text-xl ">Email Adress</label>
                        <input onChange={(e)=>{setOrderInfo({...orderInfo, email:e.target.value})}} className="ml-[2vw] border-2 w-[70vw] lg:w-[25vw] rounded-lg px-4 py-1 border-black" type="text" placeholder="yourMail@gmail.com"/>
                    </fieldset>
                    <button className="text-center w-[70vw] ml-[9vw] lg:w-[25vw] border-2 border-orange-400 rounded-xl hover:bg-amber-200 "  type="submit">Submit</button>
                </form>

            </div>

        </div>
    );

}

export default CheckOut;