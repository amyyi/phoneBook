import fetch from 'isomorphic-fetch';

const serialize = data => {
  return Object.keys(data).map(keyName => {
    return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName]);
  }).join('&');
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = response => response.json();

export default options => {
  let method = options.method || 'get',
      headers = options.headers || {},
      body;

  if (options.json) {
    headers['Content-Type'] = 'application/json;charset=UTF-8';
    body = JSON.stringify(options.json);
  } else if (options.data) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    body = serialize(options.data);
  } else if (options.formdata) {
    body = options.formdata;
  }

  return fetch(options.url, { method, headers, body, credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => err.response.json().then(json => {
      throw new Error(json.message);
    }))
    .catch(err => {
      throw err;
    });
};
