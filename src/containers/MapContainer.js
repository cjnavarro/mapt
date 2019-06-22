import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { exampleGet } from '../reducers/api';
import MapContent from '../components/map/MapContent';

const mapStateToProps = state => ({
  token: state.api.token,
  loggedIn: state.api.loggedIn
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContent);

export default MapContainer;
