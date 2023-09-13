import {useNavigate } from 'react-router-dom';

export const Product = (props) =>{

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = props.route; 
    navigate(path);
    }


    return(
        <button onClick={()=>{routeChange()}} className="w-[100%] md:w-[75%]">
            <div className="flex flex-col bg-white justify-center items-center border-orange-300 border-[1rem] rounded-3xl drop-shadow-xl">
                <img className=" md:h-[30vh] lg:h-[40vh] xl:[90vh] object-contain"  alt={props.description} src={props.image} width={400} height={600}></img>
                <div className="bg-orange-200 rounded-b-lg text-gray-100 text-xl max-h-[20%] h-[15%] w-[100%] flex flex-col items-center justify-center gap-2">
                <p className="text-2xl">{props.title}</p>
                    <p>Price: {props.price}</p> 
                </div> 
            </div> 
        </button>
        
    );


};

export default Product;
