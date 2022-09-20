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
  }
  @media (max-width: 720px) {
    font-size: 1.1rem;
    margin-left: 0;
  }
}

.program-title {
  font-size: 2.2rem;
  color: var(--title);
  grid-column: 3 / 14;

  @media (max-width: 1080px) {
    font-size: 1.8rem;
  }
  @media (max-width: 720px) {
    font-size: 1.4rem;
  }
}

.default-expanded {
  background: transparent;
  border: none;
  grid-column: 15 / 15;
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
    width: 45rem;

    @media (max-width: 1080px) {
      font-size: 1.4rem;
    }
    @media (max-width: 720px) {
      font-size: 1.1rem;
      width: fit-content;
    }
  }
}
`


