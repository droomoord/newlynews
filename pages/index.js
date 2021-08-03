import Head from "next/head";
import Articles from "../components/articles/Articles";
import axios from "axios";



export default function Home({ apiData, getPage }) {
  return (
    <div>
      <Head>
        <title>Newly News - the newliest news</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Articles apiData={apiData}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const category = context.query.category ? context.query.category : "general";
  const { data } = await axios({
    url: `https://newsapi.org/v2/top-headlines?category=${category}&language=en`,
    headers: {
      "X-Api-Key": process.env.API_KEY,
    },
  });
  const apiData = data;
  return {
    props: { apiData },
  };
}
