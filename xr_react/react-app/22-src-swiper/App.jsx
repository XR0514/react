
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

const App = () => {

  const [banner, setBanner] = useState([])

  useEffect(() => {
    fetch('http://121.89.213.194:5001/banner')
      .then(res => res.json())
      .then(res => {
        console.log(res.banners)
        setBanner(res.banners)
      })
  }, [])


  return (
    <div>
      <Swiper
        className='swiper'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {banner.map(item => 
          <SwiperSlide key={item.targetId}><img src={item.imageUrl} alt="" /></SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default App