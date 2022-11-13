import { atom, selector } from "recoil";
import { NewsService } from "../service/news";

export const newsParams = atom({
  key: "news-params",
  default: {
    q: "indonesia",
    from: "",
    sortBy: "",
  },
});

export const getNewsApi = selector({
  key: "random-user",
  get: async ({ get }) => {
    const params = get(newsParams);
    return await NewsService.getNews(params);
  },
});
