import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
padding: 1rem 7rem 1rem 7rem;

@media (max-width: 1080px) {
  padding: 2rem 4rem 2rem 4rem;
}

@media (max-width: 720px) {
  padding: 1rem 2rem 1rem 2rem;
}

.show-now {
  padding: 1rem 7rem 1rem 7rem;
  display: grid;
  grid-template-columns: repeat(15, 1fr);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(10, 1fr);
    padding: 2rem 4rem 2rem 4rem;

  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(8, 1fr);
    padding: 1rem 2rem 1rem 2rem;

  }
  
  .title-now {
    font-size: 2.2rem;
    grid-column: 1 / 15;
    margin-bottom: 1rem;

    @media (max-width: 1080px) {
      font-size: 1.8rem;
    }
    @media (max-width: 720px) {
      font-size: 1.6rem;
    }
  }

  .img-now {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
    width: 35rem;

    @media (max-width: 1080px) {
      width: 30rem;
      }
    @media (max-width: 720px) {
      grid-row: 2 / 2;
      width: 25rem;
      }
  }

  .description-now {
    font-size: 1.6rem;
    grid-column: 3 / 15;
    grid-row: 2 / 2;
    @media (max-width: 1080px) {
      font-size: 1.4rem;
      }
    @media (max-width: 720px) {
      grid-row: 3 / 3;
      grid-column: 1 / 1;
      font-size: 1.1rem;
      width: fit-content;
      margin-top: 1rem;
      }

  }
}
`

export const Details = styled.div`
display: grid;
grid-template-columns: repeat(15, 1fr);
align-items: center;
gap: 1rem;
margin-top: 1rem;

@media (max-width: 1080px) {
  grid-template-columns: repeat(10, 1fr);
}

@media (max-width: 720px) {
  grid-template-columns: repeat(8, 1fr);
  gap: 0.5rem;
}

.logo-img {
  grid-column: 1 / 1;

  @media (max-width: 720px) {
    width: 4rem;
  }
}

.start-time {
  font-size: 1.6rem;
  color: var(--text);
  grid-column: 2 / 2;

  @media (max-width: 1080px) {
    font-size: 1.4rem;
    margin-left: 1rem;
    width: 4rem;
  }
  @media (max-width: 720px) {
    font-size: 1.1rem;
    margin-left: 0;
    width: 3rem;
  }
}

.program-title {
  font-size: 2.2rem;
  color: var(--title);
  grid-row: 1 / 1;
  grid-column: 3 / 14;

  @media (max-width: 1080px) {
    font-size: 1.8rem;
  }
  @media (max-width: 720px) {
    font-size: 1.4rem;
  }
}

.default-expanded {
  grid-row: 1 / 1;
  background: transparent;
  border: none;
  grid-column: 15 / 15;
  height: 2rem;

  @media (max-width: 720px) {
    grid-column: 15 / 15;
  }

  img.arrow-down, img.arrow-up {
    width: 2.4rem;
    padding: 0.5rem;
  }
}

.details-expanded {
  display: flex;
  align-items: flex-start;
  grid-column: 3 / 15;
  height: fit-content;
  gap: 3rem;


  @media (max-width: 1080px) {
    grid-column: 1 / 15;
    }
  @media (max-width: 720px) {
    grid-column: 1 / 15;
    gap: 1rem;
    flex-direction: column;
  }

  .main-img {
    width: 35rem;
    border-radius: 0.3rem;

    @media (max-width: 1080px) {
      width: 30rem;
    }
    @media (max-width: 720px) {
      width: 25rem;
    }
  }

  .description-program {
    font-size: 1.6rem;
    width: 60rem;

    @media (max-width: 1080px) {
      grid-column: 7 / 15;
      font-size: 1.4rem;
    }
    @media (max-width: 720px) {
      font-size: 1.1rem;
      width: fit-content;
    }
  }
}
`
export const Swiper = styled.div`
margin-top: 1rem;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 1080px) {
  padding: 1rem 2rem 1rem 2rem;
}
@media (max-width: 720px) {
  padding: 0.5rem 1rem 0.5rem 1rem;
}

h3 {
  font-size: 5.6rem;

  @media (max-width: 1080px) {
    font-size: 3.6rem;
  }
  @media (max-width: 720px) {
    font-size: 2.4rem;
  }
}

button.prev-button, button.next-button {
  height: 5.5rem;

}

img.prev-arrow-button {
  transform: rotate(-90deg);
  height: 3rem;

  @media (max-width: 720px) {
    height: 2rem;
  }
}

img.next-arrow-button {
  transform: rotate(90deg);
  height: 3rem;
  
  @media (max-width: 720px) {
    height: 2rem;
  }
}
`


