import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Content } from './style';

export function Swipe() {

  function getDate() {
    const weekday = ["DOM","SEG","TER","QUA","QUI","SEX","SÁB"];
    const month = ["JANEIRO","FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
    const date = new Date();
    let day = weekday[date.getDay()]
    let monthName = month[date.getMonth()]

    return (
      <p>{`${day}, ${date.getDate()} DE ${monthName}`}</p>
    )
  }

  return (
    <Content>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className='swiper-slide'>{getDate()}</SwiperSlide>
      </Swiper>
    </Content>
  );
}
