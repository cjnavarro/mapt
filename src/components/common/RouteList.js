import React from 'react'
import PropTypes from 'prop-types'

const RouteList = ({routes, actions}) => {
  return (
    <ul>
      {routes.map(route =>
        <div key={route.id}>
        `From: ${route.from[0]}, ${route.from[1]} To: ${route.to[0]}, ${route.to[1]} `
        </div>
      )}
    </ul>
  )
}

RouteList.propTypes = {
  routes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default RouteList
