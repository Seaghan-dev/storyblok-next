import { useState } from "react"
import { storyblokEditable } from "@storyblok/react"

import { styled } from "../stitches.config";

const Box = styled("div")

const Button = styled("button", {
    padding: "30px 20px",
    backgroundColor: "WhiteSmoke",
    border: "none",
    appearance: "none",
    width: "100%",
    fontSize: "26px",
    textAlign: "left",
    cursor: "pointer"
})

const Accordion = ({ blok }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        setIsOpen((prevValue) => !prevValue)
    }

    return (
        <Box css={{
            overflow: "hidden",
            maxHeight: isOpen ? "1200px" : "91px",
            transition: "max-height 0.3s"
        }} as={blok.asList ? "li" : "div"} {...storyblokEditable(blok)}>
            <Button onClick={handleOnClick}>{blok.title}</Button>
            <Box css={{
                padding: "30px 20px",
                marginTop: "1px",
                backgroundColor: "WhiteSmoke",
                fontSize: "26px",
                textAlign: "left"
            }}>{blok.description}</Box>
        </Box>
    )
}

export default Accordion