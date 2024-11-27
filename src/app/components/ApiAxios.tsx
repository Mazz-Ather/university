'use client'
import React, { useState } from 'react'


interface Image {
    id: string;
    author: string;
    download_url: string;
    url: string;
  }
const ApiAxios = () => {
    const [Images,setImages] = useState<Image[]>([])
     const getImages = async () => {
    try {
        const response = await fetch('https://picsum.photos/v2/list') 
        const data = await response.json()
        //  const data = response.data
      setImages(data)
      console.log(Images)
    } catch (error) {
      console.error(error,'pagal')  
    }  
    }

  return (

    <div>
      <button onClick={getImages} className='px-4 py-3 bg-red-500 text-white'>Get Images</button>
    <div className='p-10'>
        {Images.map((images)=>{
             return (
                 <div key={images.id} className='flex items-center'>
                     <img src={images.download_url} alt={images.author} className='w-32 h-32 object-cover' />
                     <div className='ml-4'>
                         <h2>{images.author}</h2>
                         <p>{images.url}</p>
                     </div>
                 </div>
             )
 
        })}

    </div>
    
    </div>
  )
}

export default ApiAxios
