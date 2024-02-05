import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig={
    initialColorMode: 'light'
  }

const theme = extendTheme({
    config,
    fonts:{
        heading: `serif`,
        body: `'Inter', sans-serif;`,
    }
})

export default theme