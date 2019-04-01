import React from 'react'
import PropTypes from 'prop-types'

const GearLoadout = ({gear, actions}) =>
(
  <div>
    {gear.bike.year} {gear.bike.make} {gear.bike.model} with {gear.jacket} jacket
  </div>
)

GearLoadout.propTypes = {
  gear: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default GearLoadout
