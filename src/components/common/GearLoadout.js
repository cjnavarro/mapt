import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const GearLoadout = ({gear, actions}) =>
{
  let year = useRef(gear.bike.year);
  let make = useRef(gear.bike.make);
  let model = useRef(gear.bike.model);

  return (
    <div>
      <TextField
        defaultValue={gear.bike.year}
        ref={year}
        onChange={(e) => year = e.target.value}
        placeholder="Year"
        variant="outlined"
        label="Year"
        />
      <TextField
        defaultValue={gear.bike.make}
        ref={make}
        onChange={(e) => make = e.target.make}
        placeholder="Make"
        variant="outlined"
        label="Make"
        />
      <TextField
        defaultValue={gear.bike.model}
        ref={model}
        onChange={(e) => year = e.target.model}
        placeholder="Model"
        variant="outlined"
        label="Model"
        />
      <Button onClick={() => console.log(year)}>
        Save
      </Button>
    </div>
  )
}

GearLoadout.propTypes = {
  gear: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default GearLoadout
