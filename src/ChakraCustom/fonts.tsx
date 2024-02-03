import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
    styles={`
    @font-face {
        font-family: 'Heading Font';
        font-style: normal;
        src: url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
      }
    @font-face {
        font-family: 'Body Font';
        font-style: normal;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
      }
    `} />
)

export default Fonts