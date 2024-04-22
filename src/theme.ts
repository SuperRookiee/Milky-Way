import {extendTheme} from "@chakra-ui/react";
import type {GlobalStyleProps} from "@chakra-ui/theme-tools"
import {mode} from "@chakra-ui/theme-tools";

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    styles: {
        global: (props: GlobalStyleProps) => ({
            body: {
                bg: mode("gray.100", "#000")(props),
                color: mode("gray.800", "whiteAlpha.900")(props),
            },
            svg: {
                color: mode("#000", "#fff")(props),
                fill: mode("#000", "#fff")(props),
            },
        }),
    },
    components: {
        Modal: {
            baseStyle: (props: GlobalStyleProps) => ({
                dialog: {
                    bg: mode("gray.100", "#000")(props),
                    color: mode("gray.800", "whiteAlpha.900")(props),
                }
            })
        },
        Popover: {
            baseStyle: (props: GlobalStyleProps) => ({
                content: {
                    bg: mode("gray.100", "#000")(props),
                    color: mode("gray.800", "whiteAlpha.900")(props),
                },
            }),
        },
    }
});

export default theme;
