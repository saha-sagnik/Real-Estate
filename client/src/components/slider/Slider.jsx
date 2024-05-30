import './Slider.scss'
import { useState } from 'react'

function Slider({images}) {

    const [imageIndex, setimageIndex] = useState(null);

    const changeSlide = (direction)=>{
        if(direction==="left"){
            if(imageIndex === 0){
                setimageIndex(images.length-1);
            }
            else{
                setimageIndex(imageIndex-1);
            }
        }
        else{
            if(imageIndex === images.length-1){
                setimageIndex(0);
            }
            else{
                setimageIndex(imageIndex+1);
            }

        }
    };

  return (
   
    <div className="slider">
        {imageIndex !==null && ( <div className="fullSlider">
            <div className="arrow" onClick={()=>changeSlide("left")}>
                <img src="/arrow.png" alt="" />
            </div>
            <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow" onClick={()=>changeSlide("right")}>
            <img src="/arrow.png" className='right' alt="" />
            </div>
            <div className="close" onClick={()=> setimageIndex(null)} >
                X
            </div>
          
        </div>
          )}
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={()=>setimageIndex(0)}  />
        </div>
        <div className="smallImage">
            {images.slice(1).map((image,index)=>
        (
            <img src={image} alt="" 
            key={index} 
            onClick={()=>setimageIndex(index+1)} />
        ))}
        </div>
    </div>
  )
}

export default Slider