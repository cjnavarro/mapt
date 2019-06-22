import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResourcesContent from '../components/resources/ResourcesContent';

const mapStateToProps = state => ({
  token: state.api.token,
  loggedIn: state.api.loggedIn
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const ResourcesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourcesContent);

export default ResourcesContainer;
