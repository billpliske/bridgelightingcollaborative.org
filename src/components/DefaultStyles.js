import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Exo:200,200i,400,400i,900,900i');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Exo', sans-serif;
}

.material-icons {
    font-size: 16px;
    color: orangered;
    padding-right: 2px;
    position: relative;
    top: 2px;
}

.mi-bigger {
    font-size: 18px;
    color: orangered;
    padding-right: 2px;
    position: relative;
    top: 4px;
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
