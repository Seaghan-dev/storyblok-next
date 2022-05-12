import Head from "next/head";
import { useRouter } from "next/router";
 
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
 
export default function Page({ story: initialStory, preview }) {
  const { locale } = useRouter()
  let story = initialStory

  if (preview) {
    story = useStoryblokState(initialStory, {
      language: locale
    });
  }

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
 
export async function getStaticProps({ params, preview = false, locale }) {
  let slug = params.slug ? params.slug.join("/") : "home";
  // console.log("preview", preview)
  // console.log("slug", slug)
  let sbParams = {
    version: "published", // or 'published'
    language: locale
  };

  if (preview) {
    sbParams.version = "draft"
  }
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview
    },
    revalidate: 1,
  };
}
 
export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");
  // console.log("paths data", data)
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }
 
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
 
    paths.push({ params: { slug: splittedSlug } });
  });
  
  // console.log("paths", paths)

  return {
    paths,
    fallback: false,
  };
}