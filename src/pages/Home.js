import Navigation from "../components/Navigation";
import Explore from "../components/Explore";
import Featured from "../components/Featured";
import Quality from "../components/Quality";
import Contact from "../components/Contact";
import { useEffect } from "react";

export function Home() {
   useEffect(()=>{window.scrollTo(0, 0)},[]);
    return (
      <div className="App block" >
        
        <Explore/>
        <Featured/>
        <Quality/>
        <Contact/>
      </div>
    );
  }

  export default Home;