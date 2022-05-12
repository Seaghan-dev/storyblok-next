import Image from "next/image"
import { storyblokEditable } from "@storyblok/react"

import { styled } from "../stitches.config"

const Box = styled("div")

const Headline = styled("h1")

const Text = styled("h2")

const StyledFeatureSection = styled("div", {
    padding: "16px 24px",
    backgroundColor: "White",

    display: "flex",
    alignItems: "center",

    variants: {
        layout: {
            left: {
                justifyContent: "flex-start"
            },
            center: {
                justifyContent: "center"
            },
            right: {
                justifyContent: "flex-end"
            }
        },
        direction: {
            normal: {
                flexDirection: "row",
                "& div + div": {
                    marginLeft: "32px"
                }
            },
            reverse: {
                flexDirection: "row-reverse",
                "& div + div": {
                    marginRight: "32px"
                }
            }
        }
    },

    defaultVariants: {
        layout: "left",
        direction: "normal"
    }
})

const FeatureSection = ({ blok }) => {
    return <StyledFeatureSection layout={blok.layout} direction={blok.direction} {...storyblokEditable(blok)}>
        <Box css={{
            flex: 1
        }}>
            {/* Headline */}
            <Headline>{blok.headline}</Headline>
            {/* Text */}
            <Text>{blok.text}</Text>
        </Box>
        <Box css={{
            position: "relative",
            width: "375px",
            height: "375px",
            overflow: "hidden",
            borderRadius: "4px"
        }}>
            {/* Image */}
            {/* {blok.image.filename && <Image src={blok.image.filename} alt={blok.image.alt} width={363} height={363} />} */}
            {blok.image.filename && <Image src={blok.image.filename} alt={blok.image.alt} layout="fill" objectFit="contain" />}
        </Box>
    </StyledFeatureSection>
}

export default FeatureSection