import Navbar from "./Navbar";
import Footer from "./Footer"

const Layout = ({ children, locale, locales, defaultLocale }) => {

    return (
        <>
            <Navbar locale={locale} locales={locales} defaultLocale={defaultLocale} />
            {children}
            <Footer locale={locale} defaultLocale={defaultLocale} />
        </>
    )
}

export default Layout