import { storyblokEditable } from "@storyblok/react"

import { styled } from "../stitches.config"

const StyledCta = styled("button", {
    padding: "12px 20px",
    cursor: "pointer",

    border: "1px solid transparent",
    borderRadius: "6px",

    textTransform: "uppercase",
    fontWeight: "bold"
})

const Cta = ({ blok }) => {
    return <StyledCta {...storyblokEditable(blok)}>
        {blok.name}
    </StyledCta>
}

export default Cta