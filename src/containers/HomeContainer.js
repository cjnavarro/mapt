import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendGet } from '../reducers/api';
import HomeContent from '../components/home/HomeContent';

const mapStateToProps = state => ({
  token: state.api.token,
  loggedIn: state.api.loggedIn,
  user: state.api.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ sendGet }, dispatch)
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContent);

export default HomeContainer;
