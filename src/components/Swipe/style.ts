import styled from "styled-components";

export const Content = styled.div`
width: 100vw;
margin-top: 1rem;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 1rem 7rem 1rem 7rem;

@media (max-width: 1080px) {
  padding: 1rem 2rem 1rem 2rem;
}
@media (max-width: 720px) {
  padding: 0.5rem 1rem 0.5rem 1rem;
}

.swiper-wrapper {
  display: flex;
  align-items: center; 
}

.swiper-slide {
  display: flex;
  justify-content: center;
  font-size: 5rem;

  @media (max-width: 1080px) {
    font-size: 4.2rem;
  }
  @media (max-width: 720px) {
    font-size: 3.5rem;
  }
}


`