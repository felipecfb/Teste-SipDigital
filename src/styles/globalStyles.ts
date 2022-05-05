import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --sip: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
    --background: #F6F8FB;
    --white: #fff;
    --font: #52575C;
}

@media screen and (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media screen and (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    color: var(--font);
}

body, input, select, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyle;
