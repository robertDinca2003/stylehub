import { useState } from "react";

export const Contact = () => {

    const [email,setEmail] = useState("");
    const [description,setDescription] = useState("");
    const [valid, setValid] = useState(0);

    const checkSubmit = (e) => {
        e.preventDefault();
        let i; let ok = 1;
        for( i = 0; i<email.length;i++)
            if(email[i] === '@')break;
        if(i === email.length) ok = 0;
        for(i; i<email.length; i++)
            if(email[i] === '.')
                break;
        if(i >= email.length-1)
            ok = 0;
        if(description.length <= 0 ) ok = 0;

        if(ok)setValid(1);
        else setValid(-1);

        console.log(email, description);
        return false;
    }

    return (
        <div className="pb-[15vh] bg-[#EDAC3B] flex flex-wrap flex-col md:flex-row content-center  pt-[5vh] h-fit">
            <div className="w-[90%] md:w-[60%] flex flex-wrap flex-col justify-center content-center">

            <h1 className="text-white font-bold italic text-5xl xsm:text-7xl text-center md:text-start">
                Contact
            </h1>
            <form onSubmit={(e)=>checkSubmit(e)} className=" px-3 py-5 text-white flex flex-wrap flex-col gap-2 w-[95%] lg:w-[85%] xl:w-[60%] border-white border-[0.4rem] border-double rounded-3xl justify-center content-center  mt-[3rem]" >
                <p className="text-start text-2xl ">Email</p>
                <input type="text" onChange={(e)=>{setEmail(e.target.value); setValid(0);}} placeholder="yourEmail@gmail.com" className="placeholder-gray-200 bg-transparent w-[100%] border-2 border-white rounded-xl py-2 px-5"/>
                <p className="text-start text-2xl">Your message</p>
                <textarea  onChange={(e)=>{setDescription(e.target.value); setValid(0)}}  placeholder="This your message!" rows={7} className="placeholder-gray-200 bg-transparent border-2 border-white rounded-xl py-2 px-5"/>
                <button type="submit" className={`mt-3 text-3xl rounded-xl border-2 border-white py-2 hover:text-gray-300 hover:border-gray-300 ${valid === 0 && "bg-transparent" } ${valid === -1 && "bg-red-600" } ${valid === 1 && "bg-green-400" }`}>Submit</button>
            </form>

            </div>
            <div className="flex flex-col justify-center text-start text-white text-xl xsm:text-2xl">
                <address className="ml-[5%]">
                    <br/>
                    <br/>
                    <br/>
                    <p>Support Client Contact:</p>
                    <br/>
                    <p>+400755666000</p>    
                    <p>support@ourService.com</p>
                    <br/>
                    <p>City Bucharest<br/> Street T.Vladimirescu Nr.84</p>
                    
                    <p>Visit our social media</p>
                    <br/>
                    <p>Click to check <a className="text-cyan-300 font-bold" alt="link to instagram" href="http://instagram.com">Instagram</a></p>
                    <p>Click to check <a className={`text-cyan-300 font-bold`} alt="link to facebook" href="http://facebook.com">Facebook</a></p>

                </address>
            </div>
        </div>

    );


}

export default Contact;