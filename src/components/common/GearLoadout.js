import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const GearLoadout = ({gear, actions}) =>
{
  const [year, setYear] = useState(gear.bike.year);
  const [make, setMake] = useState(gear.bike.make);
  const [model, setModel] = useState(gear.bike.model);

  return (
    <div>
      <TextField
        defaultValue={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
        variant="outlined"
        label="Year"
        />
      <TextField
        defaultValue={make}
        onChange={(e) => setMake(e.target.value)}
        placeholder="Make"
        variant="outlined"
        label="Make"
        />
      <TextField
        defaultValue={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Model"
        variant="outlined"
        label="Model"
        />
      <Button onClick={() => actions.editGear({year, make, model}, "Joe Rocket")}>
        Save
      </Button>

      {gear.jacket}
    </div>
  )
}

GearLoadout.propTypes = {
  gear: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default GearLoadout
