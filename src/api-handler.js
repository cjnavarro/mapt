import fetch from 'cross-fetch'

import { LOGIN_CALL } from './constants/ApiCalls';

export default ApiHandler => (url, opts, token) => {

  //const combinedOptions = Object.assign({}, {}, opts)

  return (
    fetch('api/' + url,
      { method:'GET',
        mode: 'no-cors',
        headers: {
          'Authorization': 'PumpkinSpice ' + token,
          'Content-Type': 'text/json'}
      })
      .then(res => {
        //console.log(res);

        if (res.status === 401) {
          throw Error('REJECTED');
        }
        else if(res.status !== 500) {
          throw Error('BAD RESPONSE')
        }
        else {
          // TODO enforce JSON
          if(url === LOGIN_CALL) {
            return {};
          }

          return res.json();
        }
      })
      .catch(err => {
        if (err.message === 'REJECTED') {
          ApiHandler(url);
        }

        throw err;
      })
  )
}
