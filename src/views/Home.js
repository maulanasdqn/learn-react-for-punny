import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { userName } from "../store";
import { userOld } from "../store";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(() => count + 1);
  };

  const [name, setName] = useState("nama");
  const Nama = () => {
    setName(() => "Fenny");
  };

  const setNavName = useSetRecoilState(userName);

  useEffect(() => {
    setNavName("Punny");
  }, [setNavName]);

  const setNavOld = useSetRecoilState(userOld);

  useEffect(() => {
    setNavOld("17");
  }, [setNavOld]);

  return (
    <div
      data-testid="home"
      className="flex items-center justify-center h-screen w-full bg-red-700"
    >
      <button
        data-testid="home-counter"
        className="bg-blue-300 rounded p-2 m-2"
        onClick={increment}
      >
        {count}
      </button>
      <h1 className="text-black" onClick={Nama}>
        {name}
      </h1>
    </div>
  );
};

export default Home;
