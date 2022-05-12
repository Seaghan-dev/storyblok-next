import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

import { styled } from "../stitches.config";

const Headline = styled("h1")

const SectionContainer = styled("div", {
    padding: "16px 24px",
    backgroundColor: "White",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    textAlign: "center"
})

const FaqList = styled("ul", {
    listStyle: "none",
    marginBlock: "0",
    paddingInline: "0",
    width: "100%",

    "& li + li": {
        marginTop: "8px"
    }
})

const FaqSection = ({ blok }) => {
    return <SectionContainer {...storyblokEditable(blok)}>
        <Headline>{blok.headline}</Headline>
        <FaqList>
            {blok.faqs.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </FaqList>
    </SectionContainer>
}

export default FaqSection