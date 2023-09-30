import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const ChessChamps: AxiosInstance = axios.create({
  baseURL: "https://chess-champ-be-development.up.railway.app/api/v1/",
});

ChessChamps.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      if (config.headers) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      } else {
        config.headers = { Authorization: `Bearer ${accessToken}` };
      }
    }
    return config;
  },
  (error: AxiosError) => {
    console.error(error);
    return Promise.reject(error);
  }
);

ChessChamps.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.error(error);
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default ChessChamps;
