import { useState } from "react";
import Layout from "../components/Layout";
import MuiButton from "../components/MuiButton";

 export default function Objstate(){
     const [number, setNumber] = useState(0) //React Hooks
     
     function increment(){
        setNumber(number + 10)
     }
     return(
         <Layout title="useState">
             <h3>{number}</h3>
             <MuiButton 
                icon="plus" 
                title="Increment"
                onClick={increment}
                />
         </Layout>
     )
 }