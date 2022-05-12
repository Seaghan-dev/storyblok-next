import { storyblokEditable } from "@storyblok/react";

import { styled } from "../stitches.config";

const StyledHeading = styled("h2", {
  fontSize: "100px"
})

const Heading = ({ blok }) => (
  <StyledHeading {...storyblokEditable(blok)}>
    {blok.name}
  </StyledHeading>
);
 
export default Heading;