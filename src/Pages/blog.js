import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './blog.css'



const Blog=()=>{
    const [Data,setData]=useState({
        
        Image:''
    })
    
        const changeImage = () => {
    axios.get('https://foodish-api.com/api/')
        .then(res=>{
            console.log('Response from API: ', res);
            console.log('Image Data: ', res.data.image);
            let imageData = res.data.image;
            setData({ Image: imageData });
          })
          .catch(err => {
            console.log(err);
          });
};

useEffect(() => {
    changeImage(); // Fetch an image when the component mounts
  }, []);



return (
    <div className="blog">
       {/* <h1>{Data.Image}</h1> */}
       <h1> Here is some food!</h1>
       <img
        src={Data.Image}
        alt="food"
        height={400}
        width='auto'
        onClick={changeImage} // Fetch a new image when clicked
      />
        {/* //console.log(image.res); */}
        
        <p>Click the image to load a new one!</p>

    
    </div>
);
}


export default Blog;
