import fetch from 'cross-fetch'

export default ApiHandler => (url, opts, token) => {

  //TODO right to localStorage
  console.log(token)

  const combinedOptions = Object.assign({}, {}, opts)

  return (
    fetch('http://localhost:8080/api/' + url,
      { method:'GET',
        //mode: 'no-cors',
        headers: {'Authorization': token,
                  'Content-Type': 'text/json'}
      })
      // let's assume we're always getting JSON back
      .then(res => {
        // here we can check for whatever the API does
        // when it fails auth
        console.log(res);

        if (res.status === 401) {
          throw Error('rejected');
        }

        return res.json();
      })
      .catch(err => {
        // Now we can call the function
        // in this scenario
        if (err.message === 'rejected') {
          ApiHandler()
          return;
        }
        // other wise we just want to handle our normal
        // rejection
        throw err
      })
  )
}
