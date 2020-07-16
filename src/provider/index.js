import axios from 'axios';
import config from "./config";

class HTTP {
  constructor() {
    this.axios = null;
    this.config = config;
    this.configuration();
  }

  configuration() {
    this.axios = axios.create({
      ...this.config
    })
  }

  async get(url, params) {

    return await this.axios.get(url, {
      ...params
    })

  }
}

export default new HTTP()
