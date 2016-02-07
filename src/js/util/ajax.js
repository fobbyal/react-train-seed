import axios from 'axios';

let _config;
const _configCache = new Map();
export const setConfig = (config) => _config = config;

const getApi = (config = _config) => {
  if (config) {
    _configCache.set(config, _configCache.get(config) || axios.create(config));
    return _configCache.get(config);
  }
  return axios;
};

export default getApi;
