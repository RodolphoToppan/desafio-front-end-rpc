import { useState, useEffect } from "react";
import { Container, Swiper, Details } from "./style";
import axios from "axios";
import { ExpandButton } from "../ExpandButton";
import arrowUpImg from '../../assets/arrowUp.svg'
import moment from "moment";

 type ProgramProps = Array<{
  description: string,
  logoImg: string,
  mainImg: string,
  start: number,
  end: number,
  title: string,
 }>

 type ShowProps = {
  description: string,
  mainImg: string,
  start: Date,
  end: number,
  title: string,
 }

export function ProgramDetails() {
  const [program, setProgram] = useState<ProgramProps>([])
  let [value, setValue] = useState('')
  const [show, setShow] = useState<ShowProps>(Object)
  const today = new Date()


  const listNow = (item: ShowProps) => {
    let initial = item.start
    let end = item.end
    let now = moment((today.getTime())/1000)

    if (now.isBetween(initial, end)) {
      setShow(item)
    }
  };

  function renderNow() {
    return (
      <div className="show-now">
        <h5 className="title-now">Ao vivo: {show.title}</h5>
        <img src={show.mainImg} alt={show.title} className="img-now" />
        <p className="description-now">{show.description}</p>
      </div>
    );
  };

  useEffect(() => {
      const apiDate = moment().format('YYYY-MM-DD')
      setValue(apiDate)
  }, [])
        
  useEffect(() => {
    let url = `http://localhost:5000/rpc/list?date=${value}`;
    axios.get(url).then(response => {
      let data = response.data
      data.map((prog: ShowProps) => {
        listNow(prog)
      })
      setProgram(response.data)
    })
  }, [value])
  
  function prevDate() {
    const prevDate = moment(value).subtract(1, 'days').format('YYYY-MM-DD')
    setValue(prevDate)
  }

  function nextDate() {
    const nextDate = moment(value).add(1, 'days').format('YYYY-MM-DD')
    setValue(nextDate)
  }

  function secondsToHours(data: ProgramProps[4]) {
    const timeStartMillisecs = data.start * 1000
    const hour = new Date(timeStartMillisecs).getHours();
    const minutes = new Date(timeStartMillisecs).getMinutes();
    
    const startHour = (hour < 10) ? '0' + hour : hour;
    const startMinutes = (minutes < 10) ? '0' + minutes : minutes;
    
    var startTime = startHour + ':' + startMinutes;
    return (
      <p className="start-time">{startTime}</p>
    )
  }

  function currentDate() {
    const weekday = ["DOM","SEG","TER","QUA","QUI","SEX","SÁB"];
    const month = ["JANEIRO","FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
    const swipeDate = moment(value)
    let day = weekday[swipeDate.weekday()]
    let monthName = month[swipeDate.month()]
    let dayName = swipeDate.format("D")

    return (
      <h3>{`${day}, ${dayName} DE ${monthName}`}</h3>
    )
  }

  return (
    <Container>
      <Swiper>
        <button className="prev-button"
          onClick={() => prevDate()}
          >
          <img src={arrowUpImg} alt="" className='prev-arrow-button'/>
        </button>
        {currentDate()}
        <button className="next-button"
          onClick={() => nextDate()}
          >
          <img src={arrowUpImg} alt="" className='next-arrow-button'/>
        </button>
      </Swiper>
      {renderNow()}
        {program.map(data => { 
          return (            
            <Details key={data.start}>
              <img src={data.logoImg} alt={data.title} className="logo-img"/>
              {secondsToHours(data)}
              <h2 className="program-title">{data.title}</h2>
              <ExpandButton {...data} />
            </Details>
            
          )
        })}
    </Container>
  );
}