const request = (url='', method='GET', data={}) => {
  const token = localStorage.getItem('TW_NHO_TOKEN');

  let headers = {
    'Content-type': 'application/json'
  };

  if (token) {
    headers = Object.assign({}, headers, {
      'Authorization': `Bearer ${token}`
    });
  }

  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(data)
  });
}

export default request;