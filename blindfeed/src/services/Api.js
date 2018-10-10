/* Connector, hits the backend and returns the result to the client */

import axios from "axios";
const server = 'http://xkcd.com';
const corsServer = 'https://xkcd.now.sh'

export default () => {
  return axios.create({
    baseURL: `${corsServer}/`,
    withCredentials: false
  });
};
