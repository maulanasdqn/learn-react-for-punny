import React, { Suspense } from "react";
import { GetNews } from "../modules/home/GetNews";
import { SearchNews } from "../modules/home/SearchNews";

const Home = () => {
  return (
    <div
      data-testid="home"
      className="flex items-center flex-col justify-center h-screen w-full"
    >
      <SearchNews />
      <Suspense fallback="Plese Wait now Search news...">
        <GetNews />
      </Suspense>
    </div>
  );
};

export default Home;
