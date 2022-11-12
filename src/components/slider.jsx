import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import "swiper/css";
import { Button } from "@material-tailwind/react";
const Slider = () => {
  return (
    <Swiper loop={true}>
      <SwiperSlide>
        <div className='relative w-full h-96 rounded-xl overflow-hidden shadow-xl'>
          <img
            className='w-full h-full object-cover object-top'
            src='https://plus.unsplash.com/premium_photo-1661281252401-f03c9bfb6925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
          />
          <div className='w-full h-full bg-gradient-to-r from-black to-black/20 absolute top-0'>
            <div className='w-2/5 h-full p-10 flex flex-col justify-center gap-5'>
              <p className='text-5xl text-white font-bold font-bebas tracking-widest'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <Button className='bg-blue-800'>Appointment</Button>
              <Button className='text-white border-blue-900' variant='outlined'>
                Login
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-96 rounded-xl overflow-hidden shadow-xl'>
          <img
            className='w-full h-full object-cover object-top'
            src='https://plus.unsplash.com/premium_photo-1661281252401-f03c9bfb6925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
          />
          <div className='w-full h-full bg-gradient-to-r from-black to-black/20 absolute top-0'>
            <div className='w-2/5 h-full p-10 flex flex-col justify-center gap-5'>
              <p className='text-5xl text-white font-bold font-bebas tracking-widest'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <Button className='bg-blue-800'>Appointment</Button>
              <Button className='text-white border-blue-900' variant='outlined'>
                Login
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-96 rounded-xl overflow-hidden shadow-xl'>
          <img
            className='w-full h-full object-cover object-top'
            src='https://plus.unsplash.com/premium_photo-1661281252401-f03c9bfb6925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
          />
          <div className='w-full h-full bg-gradient-to-r from-black to-black/20 absolute top-0'>
            <div className='w-2/5 h-full p-10 flex flex-col justify-center gap-5'>
              <p className='text-5xl text-white font-bold font-bebas tracking-widest'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <Button className='bg-blue-800'>Appointment</Button>
              <Button className='text-white border-blue-900' variant='outlined'>
                Login
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <Navigation />
    </Swiper>
  );
};

export default Slider;

const Navigation = () => {
  const swiper = useSwiper();
  return (
    <div className='absolute bottom-10 right-10 z-10 text-5xl flex gap-3 text-white'>
      <BsFillCaretLeftFill
        onClick={() => swiper.slidePrev()}
        className='bg-black/30 hover:bg-black/60 rounded-full cursor-pointer  p-2'
      />
      <BsFillCaretRightFill
        onClick={() => swiper.slideNext()}
        className='bg-black/30 hover:bg-black/60 rounded-full  cursor-pointer p-2'
      />
    </div>
  );
};
