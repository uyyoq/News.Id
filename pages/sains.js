import Head from "next/head";
import Navbar from "../components/Navbar/navbar";
import axios from "axios";
import { NEWS_API_SAINS } from "../constant/API_URL";
import { useEffect, useState } from "react";
import List from "../components/List/list";

export default function Sains() {
  const [dataSains, setDataSains] = useState([]);

  const getDataSains = async () => {
    const res = await axios.get(`${NEWS_API_SAINS}`);
    setDataSains(res.data.articles);
  };

  useEffect(async () => {
    getDataSains();
  }, []);

  return (
    <div>
      <Head>
        <title>Create New Project</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="flex justify-center w-full md:w-10/12 lg:w-8/12  md:mx-auto my-0 pt-20 md:pt-32">
        <Navbar />

        <div className="flex mx-auto w-full flex-col py-5">
          {dataSains.map((data) => (
            <List
              urlToImage={data.urlToImage}
              url={data.url}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
