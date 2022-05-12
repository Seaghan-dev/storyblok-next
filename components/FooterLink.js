import Link from "next/link"

import { styled } from "../stitches.config"

const StyledFooterLink = styled("a", {
    "&:hover": {
        textDecoration: "underline"
    }
})

const FooterLink = ({ path, display_name, ...rest }) => {
    return <Link href={path} passHref {...rest}>
        <StyledFooterLink>{display_name}</StyledFooterLink>
    </Link>
}

export default FooterLink