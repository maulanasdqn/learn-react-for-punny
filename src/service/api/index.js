import axios from "axios";

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  customRequest(data) {
    return axios(data);
  },
};

export default ApiService;
