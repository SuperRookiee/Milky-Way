import {IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {FaMoon, FaSun} from "react-icons/fa";

const ColorMode = () => {
    const { toggleColorMode } = useColorMode();
    const Icon = useColorModeValue(FaSun, FaMoon);

    return (
        <IconButton
            onClick={toggleColorMode}
            variant='ghost'
            aria-label="Toggle dark mode"
            icon={<Icon />}
            position="fixed"
            bottom="5"
            right="5"
            zIndex="10000"
        />
    )
};

export default ColorMode;
