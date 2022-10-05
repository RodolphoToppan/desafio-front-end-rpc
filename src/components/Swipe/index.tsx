import { Content } from './style';
import arrowUpImg from '../../assets/arrowUp.svg'
import moment from 'moment';
import { useState } from 'react';


export function Swipe() {
  const weekday = ["DOM","SEG","TER","QUA","QUI","SEX","SÁB"];
  const month = ["JANEIRO","FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
  const [date, setDate] = useState('')
  
  function currentDate() {
    const swipeDate = new Date()
    let day = weekday[swipeDate.getDay()]
    let monthName = month[swipeDate.getMonth()]

    // setDate()

    return (
      <h3>{`${day}, ${swipeDate.getDate()} DE ${monthName}`}</h3>
    )
  }

  function prevDate() {
    const prevDay = moment().subtract(1, 'days').format('YYYY-MM-DD')

    setDate(prevDay)
  }

  function nextDate() {
    const nextDay = moment().add(1, 'days').format('YYYY-MM-DD')

    setDate(nextDay)
  }

  return (
    <Content>
      <button
      onClick={() => prevDate()}
      >
        <img src={arrowUpImg} alt="" className='prev-arrow-button'/>
      </button>
      {currentDate()}
      <button
      onClick={() => nextDate()}
      >
        <img src={arrowUpImg} alt="" className='next-arrow-button'/>
      </button>
    </Content>
  );
}
