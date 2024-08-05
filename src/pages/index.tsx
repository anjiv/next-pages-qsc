import Head from "next/head";

// Route - /
export default function Home() {
  return (
    <>
      <Head>
        <title>This is page title</title>
        {/* Added key so that it picks latest value otherwise it shows both */}
        <meta property="description" content="desc 1" key="desc"/>
      </Head>
      <h1>Home</h1>
      <NestedMetadata />
    </>
  );
}

function NestedMetadata() {
  return (
    <>
      <Head>
        {/* It is the latest value */}
        <title>This is nested meta data</title>
        <meta property="description" content="desc 2" key="desc"/>
      </Head>
    </>
  )
}
