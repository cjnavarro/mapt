import fetch from 'cross-fetch'

import { LOGIN_CALL, GET_PDF } from './constants/ApiCalls';

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
        else if(res.status === 500) {
          throw Error('BAD RESPONSE')
        }
        else if(url === GET_PDF) {
          if(res.status === 200)
          {
            // Hacky way...
            res.blob().then(blob => {
              const url = window.URL.createObjectURL(new Blob([blob]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', `resume.pdf`);
              document.body.appendChild(link);
              link.click();
              link.parentNode.removeChild(link);
            });
          }
        }
        else if(url === LOGIN_CALL) {
          if(res.status === 200)
          {
            return {};
          }
        }
        else {
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
