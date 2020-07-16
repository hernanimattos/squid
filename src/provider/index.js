import axios from 'axios';
import qs from 'qs';
import config from './config';

console.log(config)
class HTTP {
  constructor() {
    this.axios = null;
    this.config = config;
    this.configuration();
  }

  configuration() {
    this.axios = axios.create({
      ...this.config,
    });
  }

  async get(url, params) {


    const urlReq = !params ? url : this.urlBuild(url, params);

    return await this.axios.get(urlReq);
  }

  urlBuild(url, params) {

    return `${url}?${qs.stringify(params)}`
  }
}

export default new HTTP();
