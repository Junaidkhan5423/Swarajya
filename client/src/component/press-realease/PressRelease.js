import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PressRelease() {
  const [newsData,setNewsData]=useState([])

  const myStyle = {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
  };

  const fetchCoursedata = async () => {
    
    axios
      .get(`${process.env.REACT_APP_API_URL_DEV}/getNewBytype?type=news`)
      .then((res) => {
        setNewsData(res.data.data);
        console.log(res.data);
      });
  };
  useEffect(()=>{
    fetchCoursedata()
  },[])
  return (

<main class="mt-4 " >
    <div class="container p-4" >
      {newsData.map((item) =>{
        return (
          <>
  <div class="row justify-content-center mb-5" style={myStyle} >
        <div class="col-md-8 mb-4">
          <section class="border-bottom mb-4">
          <p><strong>{item.name}</strong></p>

            <img src={item.img}
              class="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />
          </section>
          <section>
            <p>{item.descripstion}</p>        
          </section>
 </div>
 </div>
          </>
        )
      })

      }
    

 </div>
 </main>
  )
}

export default PressRelease