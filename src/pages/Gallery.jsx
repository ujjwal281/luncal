import { useRef, useState } from 'react';
import './global.css';
import image from '../assets/image.png';

const Gallery = () => {
  const [images,setImages] = useState([image,image,image]);
  const containerRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

    function handleChange(e){
      setImages([...images,URL.createObjectURL(e.target.files[0])]);
      console.log(images);
    }

    const handleScroll = (scrollAmount) => {
      const newScrollPosition = scrollPosition + scrollAmount;
      setScrollPosition(newScrollPosition);
      containerRef.current.scrollLeft = newScrollPosition;
    };

  return (
    <div className='flex flex-col justify-center'>
        <div className="flex justify-between mx-4">
            <h1 className='bg-black flex items-center justify-center text-2xl px-5 py-2 rounded-xl text-white'>Gallery</h1>
            <div className="flex justify-around p-2">
                <label id="gallerybutton" className=' rounded-3xl px-4 flex justify-center items-center text-white text-xs cursor-pointer' htmlFor = "input-file" style={{backgroundColor : "#363C43"}}  >+ ADD IMAGE</label>
                <input  type='file' accept='image/jpeg , image/png , image/jpg' id='input-file' onChange={handleChange} className=" hidden"/> 
                <section  className="flex justify-around gap-6 ml-10">
                    <button  id='buttonShadow' onClick={() => handleScroll(-200)} className=" bg-slate-600 flex justify-center rounded-full items-center px-2.5 pb-0.5">&lt;</button>
                    <button  id='buttonShadow' onClick={() => handleScroll(+200)} className=" bg-slate-600 flex justify-center items-center rounded-full px-2.5 pb-0.5">&gt;</button>
                </section>
            </div>
        </div>
        <div  className='mt-3 flex gap-10 h-56 overflow-y-hidden scroll-smooth' ref={containerRef}>
          {
            images.map((image,key)=>{
              return(
                <img key={key} className=' h-40 rounded-3xl w-40' src={image} alt="image"/>
              )
            })
          }
        </div>
    </div>
  )
}

export default Gallery