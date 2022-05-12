import Image from "next/image"
import Link from "next/link"

import { styled } from "../stitches.config"
import { navLinks } from "../constants"
import NavLink from "./NavLink"

const Header = styled("header", {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "16px 24px",
    backgroundColor: "White",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
})

const Box = styled("div")

const LocaleLink = styled("a", {
    padding: "8px 12px",
    cursor: "pointer",

    border: "1px solid transparent",
    borderRadius: "6px",

    textTransform: "uppercase",
    fontWeight: "bold",

    variants: {
        selected: {
            true: {
                backgroundColor: "Black",
                color: "White"
            }
        }
    }
})

const Navbar = ({ locale, locales, defaultLocale }) => {
    const defaultRoot = locale === defaultLocale ? "/" : `/${locale}`

    return <Header>
        {/* logo */}
        <Box>
            <Link href={defaultRoot}>
                <a>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
            </Link>
        </Box>
        <Box>
            {/* map links */}
            <Box css={{
                display: "inline-flex",
                marginRight: "24px",

                "& a + a": {
                    marginLeft: "16px"
                }
            }}>
                {navLinks.map((link) => (
                    <NavLink key={link.display_name} {...link} />
                ))}
            </Box>
            {/* locale */}
            <Box as="ul" css={{
                display: "inline-block",
                listStyle: "none",
                marginBlock: "0",
                paddingInline: "0",

                "& li": {
                    display: "inline-block"
                },

                "& li + li": {
                    marginLeft: "8px"
                }
            }}>
                {locales?.map((loc) => (
                    <Box as="li" key={loc}>
                        <Link
                            href={`/${loc === defaultLocale ? "" : loc}`}
                            passHref
                            locale={false}
                        >
                            <LocaleLink selected={locale === loc}>
                                {loc}
                            </LocaleLink>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    </Header>
}

export default Navbar