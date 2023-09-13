
import logo from '../assets/R.png';
import meniuIcon from '../assets/meniu.png';
import Sidebar from './Sidebar';
import { useWindowSize } from '../hooks/WindowSize';
import { Link } from 'react-router-dom';

export const Navigation = () => {

    const [height,width] = useWindowSize();



    return (
        <div className='sticky top-0 z-50'>
        <Sidebar/>
        <nav className="z-50  w-[100%] h-[7%] relative text-[#373a47] text-xl xsm:text-2xl">
        
            {(width >= 420) && <img src={logo} alt={"logo"} className=' max-w-[3rem] max-h-[3rem] absolute left-[6rem] top-[1.5rem] z-50  '/>}
            <Link  to='/' className={`hover:text-[#D66700] cursor-pointer absolute top-[2rem] ${(width >=420 )?'left-[10rem]':' left-[5rem]'} z-50`}>Home</Link>
            {(width >=525)&&<Link to='/about' className="hover:text-[#D66700] cursor-pointer absolute top-[2rem] left-[16rem] z-50">About</Link>}

            <Link to='/shop' className="hover:text-[#D66700] cursor-pointer absolute top-[2rem] right-[4.5rem] xsm:right-[7.5rem] z-50">Shop</Link>
            <Link to='/cart' className="hover:text-[#D66700] cursor-pointer absolute top-[2rem] right-[1.5rem] xsm:right-[3rem] z-50">Cart</Link>
          
        </nav>
        </div>
    );


};

export default Navigation;