import { styled } from "../stitches.config"
import { footerLinks } from "../constants"
import FooterLink from "./FooterLink"

const StyledFooter = styled("footer", {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    paddingTop: "48px",
    paddingBottom: "24px",
    paddingLeft: "16px",
    paddingRight: "16px",
    backgroundColor: "White",
})

const Box = styled("div")

const LinksList = styled("ul", {
    listStyle: "none",
    marginBlock: "0",
    paddingInline: "0"
})

const ListWrapper = styled("li", {
    display: "inline-block",
    width: "25%",
    marginBottom: "16px"
})

const Copyright = styled("p")

const Footer = ({ locale, defaultLocale }) => {
    const defaultRoot = locale === defaultLocale ? "/" : `/${locale}/`

    return <StyledFooter>
        <LinksList>
            {footerLinks.map((link, index) => (
                <ListWrapper>
                        <FooterLink key={`${index}_${link[locale]}`} path={`${defaultRoot}${link.path}`} display_name={link[locale]} locale={false} />
                </ListWrapper>
            ))}
        </LinksList>
        <Copyright>
            Made by Seaghan-dev
        </Copyright>
    </StyledFooter>
}

export default Footer