import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { getNewsApi } from "../../store";

export const GetNews = () => {
  const getNews = useRecoilValue(getNewsApi);
  return (
    <Fragment>
      {getNews.articles.length === 0 ? (
        <div className="flex items-center mt-3 justify-center">
          <h1 className="font-bold text-center text-black-900 text-2xl">
            Berita tidak ditemukan
          </h1>
        </div>
      ) : (
        <section className="grid md:grid-cols-4 grid-cols-2 gap-4 border-2 border-gray-500 my-5 mx-6 rounded-lg h-[400px] overflow-y-auto w-[440px] md:w-[900px] p-3">
          {getNews.articles.map((news, index) => (
            <Fragment key={index}>
              <div className="flex flex-col items-start gap-y-2 w-[200px]">
                <img
                  className="border-2 w-auto border-black-300 rounded-t-lg"
                  src={news.urlToImage}
                  alt="articles"
                />
                <h1 className="font-bold text-sm truncate w-[100px]">
                  {news.title}
                </h1>
                <h1 className="font-bold text-xs truncate w-[100px]">
                  {news.url}
                </h1>
              </div>
            </Fragment>
          ))}
        </section>
      )}
    </Fragment>
  );
};
