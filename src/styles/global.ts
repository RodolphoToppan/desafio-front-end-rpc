import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root { 
  --background: #eeeeee;
  --header: #006497;
  --title: #111111;
  --text: #333333;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;
  color: var(--text);
}

button {
  cursor: pointer;
}

button:hover {
  opacity: 0.6;
  transition: 0.3s;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`