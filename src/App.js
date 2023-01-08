import './index.css';
import React, {useState} from 'react';
import {BsChevronBarLeft, BsChevronBarRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'

function App() {

  const imageurls =[
    {
      url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageurls.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () =>{
    const isLastSlide = currentIndex === imageurls;
    const newIndex = isLastSlide ? imageurls.length +1  : currentIndex+1;
    setCurrentIndex(newIndex+1);

  }

  return (

    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 pl-[30%] relative group">
      <div style={{backgroundImage: `url(${imageurls[currentIndex].url})`}} className='w-[600px] h-full rounded-2xl bg-center bg-cover duration-500'> </div>
      <div className='hidden group-hover:block group absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/10 text-white cursor-pointer'>
        <BsChevronBarLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block group absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/10 text-white cursor-pointer'>
        <BsChevronBarRight onClick={nextSlide} size={30} />
      </div>
    {/* STILL IN PROGRESS */}
      {/* <div className='flex top-4 justify-center py-4'>
        {imageurls.map((slide, slideIndex) =>(
          <div className='text-2xl cursor-pointer'>
            <BsChevronBarLeft/>
          </div>
        ))}
      </div> */}
    </div>

  );
}

export default App;
