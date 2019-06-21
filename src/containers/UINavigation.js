import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openDrawer, closeDrawer }  from '../actions';
import Navigation from '../components/common/Navigation';

const mapStateToProps = state => ({
  navigation: state.ui.navigation
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ openDrawer, closeDrawer }, dispatch)
});

const UINavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default UINavigation;
