import React, { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import "./Summ"



import "./Home.css"


function Home(){
   const [data,setData] =useState([]);
    useEffect(async()=>{
         let res = await fetch('https://api.tvmaze.com/search/shows?q=all');
        //  console.log(await res.json());
         const dat =await res.json();
            setData(dat);
    },[data]);  

    return(<>
    <div className="main">
        <table className="table">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Language</th>
                <th>Score</th>
                <th>Rating</th>
                <th>Image</th>
                <th>Summary</th>
            </tr>
            {
                data && data.length>0 && data.map((val,i)=>{
                    console.log(val);
                    return(
                        
                        <tr>
                            <td>{val.show.id}</td>
                            <td>{val.show.name}</td>
                            <td>{val.show.language}</td>
                            <td>{val.score}</td>
                            <td>{val.show.rating.average ? val.show.rating.average : "NA"}</td>
                            <td> <img src={val.show.image ? val.show.image.medium :  ""} /></td>
                            
                            
                            <td><Link className="button" to={`/summary/${val.show.name}`}>View Details</Link></td>
                            
                            
                        </tr>
                        
                    )
                })
            }
           
        </table>
    </div>
    </>)


}
export default Home