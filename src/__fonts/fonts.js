import { createGlobalStyle } from 'styled-components'


import Quarz  from './Quarz.ttf'
import Major from './MajorMonoDisplay-Regular.ttf'

export default createGlobalStyle`

@font-face {
    font-family: 'Quarz';
    src: local('Quarz'),
    url(${Quarz}) format('truetype');
    font-style: normal;
}
@font-face {
    font-family: 'Major';
    src: local('Major'),
    url(${Major}) format('truetype');
    font-style: normal;
}
`