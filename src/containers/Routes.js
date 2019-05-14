import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRoute, deleteRoute, exampleGet}  from '../actions'
import RouteList from '../components/common/RouteList'

const mapStateToProps = state => ({
  routes: state.routes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addRoute, deleteRoute, exampleGet }, dispatch)
})


const Routes = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteList)

export default Routes
