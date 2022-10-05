import styled from "styled-components";

export const Content = styled.div`
margin-top: 1rem;
display: flex;
justify-content: space-between;

@media (max-width: 1080px) {
  padding: 1rem 2rem 1rem 2rem;
}
@media (max-width: 720px) {
  padding: 0.5rem 1rem 0.5rem 1rem;
}

h3 {
  font-size: 5.6rem;
}

img.prev-arrow-button {
  transform: rotate(-90deg);
}

img.next-arrow-button {
  transform: rotate(90deg);
}

`