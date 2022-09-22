import styled from "styled-components";

export const Content = styled.div`
margin-top: 1rem;

@media (max-width: 1080px) {
  padding: 1rem 2rem 1rem 2rem;
}
@media (max-width: 720px) {
  padding: 0.5rem 1rem 0.5rem 1rem;
}

.swiper-wrapper {
  height: 6rem;
  height: fit-content;
}

.swiper-slide-active { 
  display: flex;
  justify-content: center;
  
  >h3{
    font-weight: 400;
    font-size: 5rem;

    @media (max-width: 1080px) {
      font-size: 4.2rem;
    }
    @media (max-width: 720px) {
      font-size: 1.5rem;
    }
  }
  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after, .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    text-rendering: auto;
}
}
`