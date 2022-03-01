import axios from 'axios';
import { Spin } from 'antd';
import ReactDOM from 'react-dom';
let requestCount = 0;

const showLoading = () => {
  if (requestCount <= 0) {
    const dom = document.createElement('div');
    dom.setAttribute('id', 'loading');
    document.body.appendChild(dom);
    ReactDOM.render((<Spin size={'large'} />), dom);
  }
  requestCount++;
};
const hideLoading = () => {
  requestCount--;
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById('loading'));
  }
};
const instance = axios.create({
  timeout: '60000'
});

instance.interceptors.request.use(function (config) {
  showLoading();
  if (config.method === 'post') {
    const { token } = window.localStorage;
    token && (config.headers.token = token);
  }
  return config;
});

instance.interceptors.response.use(function (response) {
  hideLoading();
  return response?.data;
});

export default instance;