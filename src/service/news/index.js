import ApiService from "../api";

const NewsService = {
  getNews: async function ({ q, sortBy, from }) {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_NEWS_API_KEY,
      },
      params: {
        q,
        sortBy,
        from,
      },
      url: "/everything",
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
export { NewsService };
