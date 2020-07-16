import axios from 'axios';
import config from "./config";

class HTTP {
  constructor() {
    this.axios = axios;
    this.config = config
  }

  configuration() {
    this.axios = axios.create({
      ...this.config
    })
  }

  async get(url, params) {

    this.axios.get(url, {
      ...params
    })

  }
}

export default new HTTP()
