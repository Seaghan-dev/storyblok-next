import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { useStoryblokApi, useStoryblokState, StoryblokComponent } from "@storyblok/react"

export default function Home({ story: initialStory, preview }) {
  const { locale } = useRouter()
  let story = initialStory

  if (preview) {
    story = useStoryblokState(initialStory, {
      language: locale
    })
  }
  
  return (
    <div>
      <Head>
        <title>Storyblok + Next</title>
        <meta name="description" content="NextJS app with Storyblok CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoryblokComponent blok={story.content} />
    </div>
  )
}

export async function getStaticProps({ preview = false, locale }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  // load the draft version
  let sbParams = {
    version: "published", // 'draft' or 'published'
    language: locale
  };
  
  if (preview) {
    sbParams.version = "draft"
  }

  let storyblokApi, storyblokData;
  try {
    storyblokApi = useStoryblokApi();

    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

    storyblokData = data
  } catch (err) {
    console.log("error", err)
  }
 
  return {
    props: {
      story: storyblokData ? storyblokData.story : false,
      key: storyblokData ? storyblokData.story.id : false,
      preview
    },
    revalidate: 1, // 3600 for revalidate every hour or 1 for ISR support
  };
}