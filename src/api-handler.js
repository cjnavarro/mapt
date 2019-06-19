import fetch from 'cross-fetch'

export default ApiHandler => (url, opts) => {
  const headers = {
    'Authorization': 'Token zV4nUhPvjZvpRPR4ZP98iNQzCTzaRkg43myt7UyzRCwsfc5UhLtRmIW6dxJ2ByGx'
  }

  const combinedOptions = Object.assign({}, { headers }, opts)

  return (
    fetch('http://localhost:8080/api/' + url, {Authorization: 'Token myToken'})
      // let's assume we're always getting JSON back
      .then(res => {
        // here we can check for whatever the API does
        // when it fails auth
        if (res.statusCode === 401) {
          throw Error('rejected')
        }

        return res.json()
      })
      .catch(err => {
        // Now we can call the function
        // in this scenario
        if (err.message === 'rejected') {
          ApiHandler()
          return
        }
        // other wise we just want to handle our normal
        // rejection
        throw err
      })
  )
}
