import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRoute, deleteRoute}  from '../reducers/routes';
import { exampleGet } from '../reducers/api';
import RouteList from '../components/common/RouteList';

const mapStateToProps = state => ({
  routes: state.routes,
  token: state.api.token,
  loggedIn: state.api.loggedIn
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addRoute, deleteRoute, exampleGet }, dispatch)
});


const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteList);

export default HomeContainer;
