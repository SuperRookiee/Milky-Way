import { extendTheme } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode("gray.100", "#000")(props),
                color: mode("gray.800", "whiteAlpha.900")(props),
            },
            svg: {
                color: mode("#000", "#fff")(props),
                fill: mode("#000", "#fff")(props),
            }
        }),
    },
});

export default theme;
