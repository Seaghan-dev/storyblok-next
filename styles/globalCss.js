import { globalCss } from "../stitches.config";

const globalStyle = globalCss({
    "*": {
        "-moz-box-sizing": "border-box",
        boxSizing: "border-box"
    },

    "html, body": {
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
    },
    
    body: {
        margin: 0,
        padding: 0
    },

    a: {
        color: "inherit",
        textDecoration: "none"
    }
})

export default globalStyle