import logo from './logo.svg';
import './App.css';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { GearWideConnected, Lightbulb, DropletHalf } from 'react-bootstrap-icons';
import { useState } from 'react';


function App() {
  const [active, setActive] = useState(null)
  // const langs = [
  //   {name:'Our Purpose', logo:'Bullseye'},
  //   {name:'Our Beliefs', logo:'beliefs'},
  //   {name:'Our Essence', logo:'essence'}
  // ];
  return (
    <div className="h-screen bg-[#00052a] text-white flex items-center justify-center">
      <div className="max-w-5xl">
        <Swiper 
        spaceBetween={50} 
        slidesPerView={3} 
        onSlideChange={(cur) => setActive(cur.realIndex)} 
        loop={true} 
        centeredSlides={true} 
        speed={800} 
        autoplay={{
          delay:2000,
        }} 
        modules={[Autoplay]}
        >

          <SwiperSlide>
            <div className="h-96 flex">
              <div className={'card card-active hue-rotate-[240deg] border-red-600'}>
                <div className='logo'>
                  <GearWideConnected/>
                </div>
                <h2 className='text-3xl mt-2 font-semibold'>Our Purpose</h2>
                <p className='para'>Create value through technology for our clients. Our people and shareholders.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-96 flex">
              <div className={'card card-active border-red-600'}>
                <div className='logo'>
                  <Lightbulb/>
                </div>
                <h2 className='text-3xl mt-2 font-semibold'>Our Beliefs</h2>
                <p className='para'>Given the right environment, talented and self-determined people create amazing things.
                      Collaboration is the only way to fulfill our purpoes.
                      By being agile and mastering technology we stay one step ahead.
                      We build trust by relentlessly doing as we say.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-96 flex">
              <div className={'card card-active hue-rotate-[180deg] border-red-600'}>
                <div className='logo'>
                  <DropletHalf/>
                </div>
                <h2 className='text-3xl mt-2 font-semibold'>Our Essence</h2>
                <p className='para'>A hard to explain passion for reaching new frontiers, to aim higher, to leave a mark; to transcend.</p>
              </div>
            </div>
          </SwiperSlide>
            
        </Swiper>
      </div>
    </div>
  );
}

export default App;
