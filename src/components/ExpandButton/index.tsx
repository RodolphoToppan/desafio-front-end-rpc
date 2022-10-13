import arrowDownImg from '../../assets/arrowDown.svg'
import arrowUpImg from '../../assets/arrowUp.svg'
import { useState } from "react";

type data = {
  description: string;
  logoImg: string;
  mainImg: string;
  start: number;
  end: number;
  title: string;
 }

export function ExpandButton(prop: data) {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <button
        className="default-expanded"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? <img src={arrowUpImg} alt="Collapse" className='arrow-up'/> 
        : <img src={arrowDownImg} alt="Expand" className='arrow-down'/>}
      </button>
      {isActive && (
        <div className="details-expanded" >
          <img src={prop.mainImg} alt={prop.title} className="main-img"/>
          <p className="description-program">{prop.description}</p>
        </div>
      )}
    </>
  )
}