import fetch from 'cross-fetch'

export default ApiHandler => (url, opts, token) => {

  //TODO right to localStorage

  let headers = new Headers();

  headers.append('Content-Type', 'text/json');
  headers.append('Authorization', token);

  const combinedOptions = Object.assign({}, headers, opts)

  return (
    fetch('http://localhost:8080/api/' + url,
      { method:'GET',
        //mode: 'no-cors',
        headers: {Authorization: localStorage['Token']}
      })
      // let's assume we're always getting JSON back
      .then(res => {
        // here we can check for whatever the API does
        // when it fails auth
        console.log(res);

        localStorage['Token'] = 'Basic Q2hyaXMgTmF2YXJybzpwYXNzd29yZA==';

        if (res.status === 401) {
          throw Error({});
        }

        return res.json();
      })
      .catch(err => {
        // Now we can call the function
        // in this scenario
        // if (err.message === 'rejected') {
        ApiHandler()
        return;
        // }
        // other wise we just want to handle our normal
        // rejection
        //throw err
      })
  )
}
