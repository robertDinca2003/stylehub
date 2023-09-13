import {CarouselProvider,Slider,Slide, Image} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import explore1 from '../assets/newCollection1.jpeg'
import explore2 from '../assets/newCollection2.jpeg'
import explore3 from '../assets/newCollection3.jpeg'
import { Link, useNavigate } from 'react-router-dom';




export const Explore = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `shop`; 
    navigate(path);
    }

    return(
        <div className="bg-[url('assets/explore-bg2.png')] bg-cover min-h-screen  xsm:h-fit  grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 items-center place-items-center ">
                <div className="h-auto w-[75%] md:w-[70%]  lg:w-[60%] xl:w-[55%]  z-10 relative">
                    <div className='bg-gradient-to-r from-orange-200 rounded-3xl absolute min-w-[80%] left-[-8%] top-[-5%] min-h-[110%]  '></div>
                    <CarouselProvider
                     className='z-10 border-[1rem] rounded-3xl border-orange-300 bg-orange-300 drop-shadow-2xl object-contain'
                     dragEnabled = {false} infinite ={true} interval={4000} isPlaying={true} 
                     naturalSlideWidth={300} 
                     naturalSlideHeight={425} 
                     totalSlides={3}>
                        <Slider className='rounded-xl'>
                            <Slide index={0}><Image className='rounded-xl bg-orange-300' src={explore3} alt="Outfit 1"/></Slide>
                            <Slide index={1}><Image className='rounded-xl' src={explore2} alt="Outfit 2"/></Slide>
                            <Slide index={2}><Image className='rounded-xl' src={explore1} alt="Outfit 3"/></Slide>
                        </Slider>
                        
                    </CarouselProvider>
                </div>
                <div className='flex flex-col flex-wrap justify-center content-center align-center '>
                <h1 className='text-5xl md:text-6xl lg:text-8xl text-[#D66700]  text-center text-start font-bold italic'>Style Hub</h1>
                 <div className="p-2 z-10 border-[0.5rem] relative border-orange-300  rounded-3xl shadow-xl w-[90%] xsm:w-[85%] h-fit  lg:w-[70%] lg:max-w-[60%] z-10 my-10">

                    <h1 className="z-10 text-center text-3xl font-bold mt-5 ml-3 text-[#D66700] ">Explore our new collection!</h1>
                    <h2 className="z-10 text-start text-xl italic mt-5 mx-3 ">New look to your casual outfits. Embrace nature through our new designs. Inspired by tropical accents of summer.<br></br><br></br>Descover unlimeted ways to combine this pieces<br></br><br></br>The world is in your hands with us!</h2>
                    <button onClick={()=>{routeChange();}} className="z-10 mb-2 text-white bg-[#D66700] mt-6 p-2 rounded-xl hover:bg-[#ED960C] ">Check it now</button>
                    
                </div>   
                </div>
                
                
        </div>
    );

};

export default Explore;