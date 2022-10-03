import { useState, useEffect } from "react";
import { Container, Details } from "./style";
import useCollapse from "react-collapsed";
import moment from "moment";
import axios from "axios";
import { Swipe } from "../Swipe";
import { ExpandButton } from "../ExpandButton";


 type ProgramProps = Array<{
  description: string,
  logoImg: string,
  mainImg: string,
  time: string,
  start: number,
  end: number,
  title: string,
 }>

 type ShowProps = {
  description: string,
  mainImg: string,
  time: string,
  start: number,
  end: number,
  title: string,
 }

export function ProgramDetails() {
  const [program, setProgram] = useState<ProgramProps>([])
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(new Date())
  const [show, setShow] = useState<ShowProps>(Object)
  const [checked, setChecked] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const listNow = (item: ShowProps) => {
    let initial = item.start
    let end = item.end
    let now = moment((value.getTime())/1000)

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
      </div>);
  };

  useEffect(() => {
    let date = moment(value).format('YYYY-MM-DD');
    let url = `http://localhost:5000/rpc/list?date=${date}`;
    axios.get(url).then(response => {
      let data = response.data
      data.map((prog: ShowProps) => {
        listNow(prog)
      })
      setProgram(response.data)
    })
  }, []);

  function reminder() {
    setChecked(!checked)
  }

  function handleOnClick() {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Swipe/> 
      {renderNow()}
        {program.map(data => { 
          return (            
            <Details key={data.start}>
              <img src={data.logoImg} alt={data.title} className="logo-img"/>
              <p className="start-time">{(data.time).slice(0,5)}</p> 
              <h2 className="program-title">{data.title}</h2>
              <ExpandButton {...data} />
              {/* <p className="checkbox-label">Assistir mais tarde?</p>
              <input
                className="reminder-checkbox"
                type="checkbox" 
                onChange={() => { 
                  reminder()
                  console.log(checked)
                  true ? alert(`Programa: "${data.title}" marcado!`) : alert('Desmarcado!')
                  // aqui o checked está alterando, mas a condicional não altera com ele, sempre retornando true
                }}
              /> */}
            </Details>
            
          )
        })}
    </Container>
  );
}