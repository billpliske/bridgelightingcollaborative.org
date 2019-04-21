import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Exo";
    font-style: normal;
    font-weight: 100;
    src: url(/fonts/Exo-ExtraLight.woff) format("woff");
}
@font-face {
    font-family: "Exo";
    font-style: italic;
    font-weight: 100;
    src: url(/fonts/Exo-ExtraLightItalic.woff) format("woff");
}
@font-face {
    font-family: "Exo";
    font-style: normal;
    font-weight: 200;
    src: url(/fonts/Exo-Regular.woff) format("woff");
}
@font-face {
    font-family: "Exo";
    font-style: italic;
    font-weight: 200;
    src: url(/fonts/Exo-Italic.woff) format("woff");
}
@font-face {
    font-family: "Exo";
    font-style: normal;
    font-weight: 300;
    src: url(/fonts/Exo-Black.woff) format("woff");
}
@font-face {
    font-family: "Exo";
    font-style: italic;
    font-weight: 300;
    src: url(/fonts/Exo-BlackItalic.woff) format("woff");
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /**** MAIN ****/
    --very-dark-blue: #201E2E;
    --cornflower: #6D76FF;

    /**** COLORS ****/
    --light-purple: #AB73F4;
    --greenish-teal: #35C5A4;

    --dark-blue-base: 38, 49, 95; /* #26315F */
    --purple-base: 74, 40, 108; /* #4a286c */
    --dark-green-blue-base: 24, 91, 72; /* #185B48 */
`

export default GlobalStyles
