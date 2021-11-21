import Head from "next/head";
import Navbar from "../components/Navbar/navbar";
import axios from "axios";
import { NEWS_API_GENERAL, NEWS_API_POPULAR } from "../constant/API_URL";
import { useEffect, useState } from "react";
import List from "../components/List/list";

export default function Home() {
  const [dataGeneral, setDataGeneral] = useState([]);
  const [dataPopular, setDataPopular] = useState([]);

  const getDataGeneral = async () => {
    const res = await axios.get(`${NEWS_API_GENERAL}`);
    setDataGeneral(res.data.articles);
  };

  const getDataPopular = async () => {
    const res = await axios.get(`${NEWS_API_POPULAR}`);
    setDataPopular(res.data.articles);
  };

  useEffect(async () => {
    getDataGeneral();
    getDataPopular();
  }, []);

  return (
    <div>
      <Head>
        <title>Create New Project</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="flex justify-center w-full md:w-10/12 lg:w-10/12  md:mx-auto my-0 pt-20 md:pt-32">
        <Navbar />

        <div className="flex mx-auto w-full flex-col py-5">
          {dataGeneral.map((data) => (
            <List
              urlToImage={data.urlToImage}
              url={data.url}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>

        <div className="hidden justify-end lg:flex mx-auto w-2/6  flex-col py-5 px-8">
          {dataPopular.map((data) => (
            <div className="flex flex-col h-auto w-full m-3 border border-gray-200 shadow">
              <div className="w-full flex flex-col p-4">
                <a href={data.url} target="_blank">
                  <p className="text-xs overflow-hidden lg:py-2 py-1 lg:text-sm w-full text-gray-800 font-semibold border-b border-gray-200">
                    {data.title}
                  </p>
                  <p className="hidden pt-4 overflow-hidden md:flex md:text-xs text-gray-800">
                    {data.description}
                  </p>
                </a>
                <div className="text-gray-700 text-xs pt-2">
                  <p className="py-1">{data.author}</p>
                  <p>{data.publishedAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
