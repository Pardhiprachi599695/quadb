import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import "./Summ.css"


const Summ=()=>{
    const {showname}=useParams();
    const [data,setData] = useState([]);
    useEffect(async()=>{
        let res = await fetch('https://api.tvmaze.com/search/shows?q=all');
       //  console.log(await res.json());
        const dat =await res.json();
           setData(dat.filter(val=>{
               return val.show.name===showname;
           })[0])
   },[showname]);  
   
    
    return(
        <div className = "main">
            <div className="text">
               <h2> {showname}</h2>
               
               
            
            <p>{data && data.show ?  (data.show.summary.replace('<p>'," ").replace("</p>"," ").replace('<b>'," ").replace("</b>"," ")): "No summary"}</p>
            <Link className="btn" to ="/">Go back</Link>
           </div>
        </div>
    
    
        
    )
}
export default Summ