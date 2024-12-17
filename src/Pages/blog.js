import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './blog.css'


const Blog=()=>{
    const [Data,setData]=useState({
        
        Image:''
    })
    

    useEffect(()=>{
    axios.get('https://foodish-api.com/api/')
        .then(res=>{
            console.log('Response from main API: ',res)
            console.log('Image Data: ',res.data.image)
            let imageData=res.data.image;
            setData({Image:imageData})
        })
        .catch(err=>{
            console.log(err);
        })
        
},[])



return (
    <div className="blog">
       {/* <h1>{Data.Image}</h1> */}
       <img src={Data.Image} alt="food" height = {400} width='auto'/>
       

        {/* //console.log(image.res); */}
       <p> hi</p>
    
    </div>
);
}


export default Blog;
