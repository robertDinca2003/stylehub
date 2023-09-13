import Contact from "../components/Contact";
import { useEffect } from "react";

export const About = () => {

    useEffect(()=>{window.scrollTo(0, 0)},[]);

    return(
        <div className="bg-[#EDAC3B]  min-h-screen pt-[5vh] text-white">
            <h1 className="mb-[10vh] text-7xl sm:text-8xl md:text-9xl text-white italic font-bold ">About</h1>
            <h2 className="text-4xl sm:text-5xl px-[10vw]">Welcome to Style Hub - Your Ultimate Destination for Fashion and Style!</h2>
            <h3 className="mt-[3vh] px-[7vw] text-2xl text-start"> At Style Hub, we believe that fashion is not just about clothes; it's a statement of who you are and what you stand for. Our mission is to empower individuals to embrace their unique sense of style, while providing them with an unparalleled shopping experience that is convenient, inspiring, and personalized.</h3>
            <h3 className="mt-[3vh] px-[7vw] text-2xl text-start">Discover the Latest Trends:
Style Hub is your go-to online fashion destination for the latest trends, exclusive collections, and timeless classics. Our team of expert stylists scours the fashion world to curate a diverse and exciting range of products that cater to all tastes and preferences. Whether you're into streetwear, high fashion, athleisure, or bohemian chic, we have something for everyone.</h3>
            <h3 className="mt-[3vh] px-[7vw] text-2xl text-start">Unmatched Selection:
We take great pride in offering an extensive selection of clothing, accessories, and footwear from both established brands and emerging designers. Our product catalog is carefully curated to ensure that every piece reflects quality, style, and creativity. Whether you're looking for that perfect little black dress, a statement handbag, or a pair of sneakers that will turn heads, you'll find it all here at Style Hub.

</h3>
            <Contact />
        </div>
    )

}

export default About;