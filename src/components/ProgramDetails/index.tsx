import { useState, useEffect } from "react";
import { Container, Details } from "./style";
import arrowImg from '../../assets/arrow.svg'
import useCollapse from "react-collapsed";

 type ProgramProps = Array<{
  description: string,
  logoImg: string,
  mainImg: string,
  start: string,
  time: number,
  end: number,
  title: string,
 }>

export function ProgramDetails() {
  const [program, setProgram] = useState<ProgramProps>([]);
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  
  function handleOnClick() {
    setExpanded(!isExpanded)
  }

  function getProgram() {
    fetch(`http://localhost:5000/rpc/list?date=${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    .then((response) => response.json())
    .then((data) => setProgram(data));
  }
  
  useEffect(() => {
    getProgram();
  }, []);
  
  return (
    <Container>
        {program.map(data => {
        return (
          <Details key={data.start}>
            <img src={data.logoImg} alt={data.title} className="logo-img"/>
            <p className="start-time">{data.start.slice(0, 5)}</p>
            <h2 className="program-title">{data.title}</h2>
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
        )})}
    </Container>
  );
}