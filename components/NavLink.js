import Link from "next/link"

import { styled } from "../stitches.config"

const StyledNavLink = styled("a")

const NavLink = ({ path, display_name }) => {
    return <Link href={path} passHref>
        <StyledNavLink>{display_name}</StyledNavLink>
    </Link>
}

export default NavLink