import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../reducers/api';
import LoginEntry from '../components/login/LoginEntry';

const mapStateToProps = state => ({
  message: state.api.message,
  loggedIn: state.api.loggedIn
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ login }, dispatch)
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginEntry);

export default LoginContainer;
