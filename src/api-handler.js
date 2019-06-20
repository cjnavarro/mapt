import fetch from 'cross-fetch'

export default ApiHandler => (url, opts) => {
  // const headers = {
  //   'Authorization': 'Token zV4nUhPvjZvpRPR4ZP98iNQzCTzaRkg43myt7UyzRCwsfc5UhLtRmIW6dxJ2ByGx'
  // }

  const combinedOptions = Object.assign({}, {}, opts)

  return (
    fetch('http://localhost:8080/api/' + url, combinedOptions)
      // let's assume we're always getting JSON back
      .then(res => {
        // here we can check for whatever the API does
        // when it fails auth
        console.log(res);

        if (res.status === 401) {
          console.log('here');
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
