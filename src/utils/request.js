import axios from 'axios';

export function request(config) {
  const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 8000,
  });

  service.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  service.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  return service(config);
}
