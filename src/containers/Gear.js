import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addGear, deleteGear, editGear } from '../actions'
import GearLoadout from '../components/common/GearLoadout'

const mapStateToProps = state => ({
  gear: state.gear
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addGear, deleteGear, editGear }, dispatch)
})


const Gear = connect(
  mapStateToProps,
  mapDispatchToProps
)(GearLoadout)

export default Gear
