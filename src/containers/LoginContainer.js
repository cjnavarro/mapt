import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions';
import LoginEntry from '../components/common/LoginEntry';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ login }, dispatch)
});

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(LoginEntry);

export default LoginContainer;
