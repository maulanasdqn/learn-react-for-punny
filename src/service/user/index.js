import ApiService from "../api";

const UserService = {
  getUser: async function () {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      url: "/",
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
export { UserService };
