import { useRouter } from "next/router"
import { storyblokInit, apiPlugin } from "@storyblok/react"

import globalStyle from "../styles/globalCss"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import Grid from "../components/Grid"
import Page from "../components/Page"
import Teaser from "../components/Teaser"
import Cta from "../components/Cta"
import FeatureSection from "../components/FeatureSection"
import HeroMain from "../components/HeroMain"
import Accordion from "../components/Accordion"
import FaqSection from "../components/FaqSection"
import Richtext from "../components/Richtext"

const components = {
  heading: Heading,
  grid: Grid,
  page: Page,
  teaser: Teaser,
  cta: Cta,
  "feature_section": FeatureSection,
  "hero_main": HeroMain,
  accordion: Accordion,
  "faq_section": FaqSection,
  "richtext": Richtext
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
})

function MyApp({ Component, pageProps }) {
  globalStyle()
  
  // console.log("page props", pageProps)
  const { locale, locales, defaultLocale } = useRouter()

  return (
    <Layout locale={locale} locales={locales} defaultLocale={defaultLocale}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
