import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig={
    initialColorMode: 'light'
  }

const theme = extendTheme({
    config,
    fonts:{
        heading: `'Heading Font', serif`,
        body: `'Body Font', sans-serif`,
    }
})

export default theme