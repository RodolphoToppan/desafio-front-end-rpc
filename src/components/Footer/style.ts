import styled from "styled-components";

export const Container = styled.div`
height: 7.4rem;
width: 100vw;
background: var(--header);
padding: 1rem 7rem 1rem 7rem;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 1080px) {
  padding: 2rem 4rem 2rem 4rem;
}

@media (max-width: 720px) {
  padding: 1rem 2rem 1rem 2rem;
}

img {
  width: 3.5rem;
  height: 3.5rem;
}
`