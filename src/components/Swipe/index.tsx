import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Content } from './style';

export function Swipe() {
  const weekday = ["DOM","SEG","TER","QUA","QUI","SEX","SÁB"];
  const month = ["JANEIRO","FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
  const date = new Date();
  
  function getDate() {
    let day = weekday[date.getDay()]
    let monthName = month[date.getMonth()]

    return (
      <h3>{`${day}, ${date.getDate()} DE ${monthName}`}</h3>
    )
  }

  function prevDate() {
    let nextday = weekday[date.getDay() - 1]
    let monthName = month[date.getMonth()]

    return (
      <h3>{`${nextday}, ${date.getDate() - 1} DE ${monthName}`}</h3>
    )
  }

  function nextDate() {
    let nextday = weekday[date.getDay() + 1]
    let monthName = month[date.getMonth()]

    return (
      <h3>{`${nextday}, ${date.getDate() + 1} DE ${monthName}`}</h3>
    )
  }

  return (
    <Content>
      <Swiper
        modules={[Navigation]}
        // slidesPerView={1}
        navigation
        initialSlide = {1}
        loopPreventsSlide = {true}
      >
        {/* <SwiperSlide>{prevDate()}</SwiperSlide> */}
        <SwiperSlide>{getDate()}</SwiperSlide>
        {/* <SwiperSlide>{nextDate()}</SwiperSlide> */}
      </Swiper>
    </Content>
  );
}
