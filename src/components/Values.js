import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Values = () => {
    return( 
        <div className="h-screen flex items-center justify-center">
            <div className="max-w-5xl">
                <Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
                    <SwiperSlide>
                        <div className='h-96 flex'>
                            <div className={'card'}></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}