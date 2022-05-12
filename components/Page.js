import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
import { styled } from "../stitches.config";

const Main = styled("main", {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",

    display: "flex",
    flexDirection: "column"
})

const Page = ({ blok }) => (
  <Main {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </Main>
);
 
export default Page;