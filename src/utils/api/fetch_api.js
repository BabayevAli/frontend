import {IS_CONSOLE_LOG_OPEN} from '../../utils/constants/constants.js'


export function fetchApi(url, config) {
  return new Promise(resolve => {
    fetch(url, config)
      .then(response => {
        IS_CONSOLE_LOG_OPEN && console.log('Request : ', url, ' Params : ', config, ' Response : ', response);
        if (response.ok) {
          response.json()
            .then(json => resolve({ok: true, json}));
        } else {
          resolve({ok: false, json: response.status});
        }
      })
      .catch(error => resolve({ok: false, error}));
  });
}

export function postData(url = ``, config, data = {}) {
  return new Promise(resolve => {
    fetch(url, {
      ...config
      , body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          response.json().then(json => resolve({ok: true, json}));
        } else {
          response.json().then(json => resolve({ok: false, json}));
        }
      })
      .catch(error => {
        IS_CONSOLE_LOG_OPEN && console.log({ok: false, error});
      });
  });
}
