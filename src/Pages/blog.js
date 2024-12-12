import React,{useEffect,useState} from 'react';
import axios from 'axios';


const Blog=()=>{
    const [Data,setData]=useState({
        Company:'',
        Description:''
    })
    useEffect(()=>{
    axios.get('https://foodish-api.com/api/')
        .then(res=>{
            console.log('Response from main API: ',res)
            console.log('Blog Data: ',res.data.ad)
            let companyData=res.data.ad;
            setData({Company:companyData.company,Description:companyData.text})
        })
        .catch(err=>{
            console.log(err);
        })
},[])
return (
    <>
        <h1>
            Food dishes
        </h1>
    
    </>
);
}

export default Blog;