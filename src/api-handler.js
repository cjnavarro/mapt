import fetch from 'cross-fetch'

export default ApiHandler => (url, opts, token) => {

  const combinedOptions = Object.assign({}, {}, opts)

  return (
    fetch('http://localhost:8080/api/' + url,
      { method:'GET',
        mode: 'no-cors',
        headers: {'Authorization': 'Basic ' + token,
                  'Content-Type': 'text/json'}
      })
      .then(res => {
        console.log(res);

        if (res.status === 401) {
          throw Error('rejected');
        }
        else {
          // TODO enforce JSON
          if(url === 'user/auth') {
            return {};
          }

          return res.json();
        }
      })
      .catch(err => {
        if (err.message === 'rejected') {
          ApiHandler(url);
        }

        throw err;
      })
  )
}
