import fetch from 'cross-fetch'

export default ApiHandler => (url, opts) => {

  //TODO right to localStorage

  let headers = new Headers();

  headers.append('Content-Type', 'text/json');
  headers.append('Authorization', 'Basic Q2hyaXMgTmF2YXJybzpwYXNzd29yZA==');

  const combinedOptions = Object.assign({}, headers, opts)

  return (
    fetch('http://localhost:8080/api/' + url,
      { method:'GET',
        //mode: 'no-cors',
        headers: {Authorization: 'Basic Q2hyaXMgTmF2YXJybzpwYXNzd29yZA=='}
      })
      // let's assume we're always getting JSON back
      .then(res => {
        // here we can check for whatever the API does
        // when it fails auth
        console.log(res);

        if (res.status === 401) {
          window.location.href = '/#/login';
          return {};
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
