import { useState, useEffect } from "react";
import { Container, Details } from "./style";
import arrowImg from '../../assets/arrow.svg'
import useCollapse from "react-collapsed";
import moment from "moment";
import axios from "axios";
import { Swipe } from "../Swipe";


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
  const [program, setProgram] = useState<ProgramProps>([]);
  const [isExpanded, setExpanded] = useState(false)
  const [value, setValue] = useState(new Date());
  const [show, setShow] = useState<ShowProps>(Object);
  const [checked, setChecked] = useState(false)

  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

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
    setExpanded(!isExpanded)
  }

  return (
    <Container>
      <Swipe/> {/* essa parte seria responsável por percorrer os dias durante a semana e ir mostrando a programação de cada dia e por algum motivo os dias mudavam, aparecia no console.log mas na tela não mostrava nada. Deixei o código como tinha feito, mas resolvi tirar essa funcionalidade */}
      {renderNow()}
        {program.map(data => { 
          return (            
            <Details key={data.start}>
              <img src={data.logoImg} alt={data.title} className="logo-img"/>
              <p className="start-time">{(data.time).slice(0,5)}</p> {/* aqui eu busquei o dado "human_start_time" dentro da API e só depois que fui perceber que o tempo está com uma diferença de 3 horas a mais, acabei não conseguindo resolver isso */}
              <h2 className="program-title">{data.title}</h2>
              <p className="checkbox-label">Assistir mais tarde?</p>
              <input
                className="reminder-checkbox"
                type="checkbox" 
                onChange={() => { 
                  reminder()
                  console.log(checked)
                  true ? alert(`Programa: "${data.title}" marcado!`) : alert('Desmarcado!')
                  // aqui o checked está alterando, mas a condicional não altera com ele, sempre retornando true
                }}
              />
              <button
                {...getToggleProps({onClick: handleOnClick})}
                className="default-expanded" 
              >
                <img src={arrowImg} alt="Expand" className="arrow-img" />
              </button>
              <section className="details-expanded" {...getCollapseProps()}>
                <img src={data.mainImg} alt={data.title} className="main-img" />
                <p className="description-program">{data.description}</p>
              </section>
            </Details>
            
          )
        })}
    </Container>
  );
}