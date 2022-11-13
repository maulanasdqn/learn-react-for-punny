import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { newsParams } from "../../store";

export const SearchNews = () => {
  const setParams = useSetRecoilState(newsParams);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(Date.now());
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setParams({
          q: search,
          sortBy: "",
          from: date,
        });
      }}
      className="flex items-center flex-col gap-y-4"
    >
      <div className="flex gap-x-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Cari judul"
          className="border-2 border-blue-400 rounded-lg p-2"
        />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          placeholder="Cari judul"
          className="border-2 border-blue-400 rounded-lg p-2"
        />
      </div>
      <button
        type="submit"
        className="border-2 border-blue-400 text-blue-400 rounded-lg w-full h-auto p-2"
      >
        Search
      </button>{" "}
    </form>
  );
};
