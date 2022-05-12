import { storyblokEditable } from "@storyblok/react"
import { render } from "storyblok-rich-text-react-renderer";

import { styled } from "../stitches.config";

const Box = styled("div")

const Richtext = ({ blok }) => {
    return <Box {...storyblokEditable(blok)}>
        {render(blok.content)}
    </Box>
}

export default Richtext