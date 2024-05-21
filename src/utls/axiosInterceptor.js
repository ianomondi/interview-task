/* eslint-disable no-param-reassign */
import axios from 'axios';

// set up config for courses api calls
// eslint-disable-next-line import/prefer-default-export
export const axiosInterceptor = axios.create({
  baseURL: 'https://interview-test.azurewebsites.net/api',
});

// intercept every request and add the bearer token
axiosInterceptor.interceptors.request.use(
  (requestConfig) => {
    // Ensure headers and headers.post are defined
    if (!requestConfig.headers) {
      requestConfig.headers = {};
    }
    if (!requestConfig.headers.post) {
      requestConfig.headers.post = {};
    }

    requestConfig.headers.post['Access-Control-Allow-Origin'] = '*';
    requestConfig.headers.authorization = `Bearer ${localStorage.getItem(
      'bearerToken'
    )}`;
    return requestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptor.interceptors.response.use(
  (responseConfig) => {
    return responseConfig;
  },
  (error) => {
    // check if error from server is 401 then logout user
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location = '/';
    }
    return Promise.reject(error);
  }
);
