import denim from '../assets/QualityProducts/denimMaterial.jpg'
import lether from '../assets/QualityProducts/letherMaterial.jpg'
import silk from '../assets/QualityProducts/silkMaterial.jpg'


export const Quality = () => {
    return(
        <div className="min-h-screen h-fit mt-[5rem] bg-[url('assets/QualityProducts/quality-bg.png')] bg-cover">
           <div>
                <h1 className='text-4xl xsm:text-6xl font-bold text-orange-700 '>Descover Quality Materials</h1>
                <h2 className='mt-7 text-2xl xms:text-3xl italic text-rose-700'>Confotable clothig is our base priciple.<br/> Mobility free and a pleasurable exprience.<br/>Quality over quantity</h2>
                <h2 className='mt-7 text-3xl xsm:text-5xl italic font-bold text-amber-400'>Silk - Leather - Denim </h2>
           </div>
           <div className="relative h-[50vh]">
                <img src={denim} className="z-20 border-dashed border-[0.5rem] border-white relative top-[10%] left-[20%] md:left-[55%] md:top-[10%] drop-shadow-lg rounded-3xl object-fit h-fit w-[40%]  md:w-[30%] lg:w-[25%]" alt="silk material" width = {400} height={600}></img>
                <img src ={lether} className="z-30  border-dashed border-[0.5rem] border-white absolute top-[15%] left-[37%] md:left-[35%] md:top-[20%] drop-shadow-lg rounded-3xl object-fit h-fit w-[40%]  md:w-[30%] lg:w-[25%] " alt="lace material" width = {400} height={600}></img>
                <img src={silk} className="z-300 border-dashed border-[0.5rem] border-white absolute top-[17%] sm:top-[35%] left-[50%] md:left-[15%] md:top-[10%] drop-shadow-lg rounded-3xl object-fit h-fit w-[40%] md:w-[30%] lg:w-[25%]" alt="lether material" width = {400} height={600}></img>
           </div>
           </div>
    )
}

export default Quality;