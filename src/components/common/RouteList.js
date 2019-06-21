import React, { useState } from 'react'
import PropTypes from 'prop-types'
import  { Redirect } from 'react-router-dom';

const RouteList = ({routes, token, loggedIn, actions}) =>
{
  const [coordinate, setCoordinate] = useState("");

  // Already authed go home!
  console.log(loggedIn);
  if(!loggedIn) {
    return <Redirect to='/login' />
  }

  return (
    <ul>
      {routes.map(route =>
        <div key={route.id}>
          From: {route.from[0]}, {route.from[1]} To: {route.to[0]}, {route.to[1]}
        </div>
      )}
      123 {token}
      <form onSubmit={() => actions.addRoute([coordinate, 0], [2,3])}>
        <label>
          Number:
          <input type="number" onChange={(e) => setCoordinate(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => actions.deleteRoute(0)}>Delete ME</button>
      <button onClick={() => actions.exampleGet('user/all', token)}> API CALL</button>
    </ul>
  )
}

RouteList.propTypes = {
  routes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default RouteList
