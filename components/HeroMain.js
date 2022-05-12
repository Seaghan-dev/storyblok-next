import Image from "next/image"
import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

import { styled } from "../stitches.config"

const Box = styled("div")

const Headline = styled("h1", {
    fontSize: "50px",
    marginBlock: "24px"
})

const Text = styled("h2", {
    marginBlockStart: "0",
    marginBlockEnd: "24px"
})

const StyledHeroMain = styled("div", {
    height: "720px",
    padding: "16px 24px",
    backgroundColor: "transparent",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    textAlign: "center",
    color: "WhiteSmoke"
})

const HeroMain = ({ blok }) => {
    return <StyledHeroMain {...storyblokEditable(blok)}>
        <Box css={{
            position: "fixed",
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            maxWidth: "1280px",
            "z-index": -1
        }}>
            {/* Image */}
            {blok.background_image.filename && <Image src={blok.background_image.filename} alt={blok.background_image.alt} layout="fill" objectFit="cover" quality={100} />}
        </Box>
        {/* Headline */}
        <Headline>{blok.headline}</Headline>
        {/* Text */}
        <Text>{blok.text}</Text>
        <Box css={{
            "& button + button": {
                marginLeft: "16px"
            }
        }}>
            {/* CTAs */}
            {blok.ctas.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </Box>
    </StyledHeroMain>
}

export default HeroMain