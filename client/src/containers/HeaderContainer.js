import { connect } from 'react-redux';
import { logoutUser } from '../actions';

import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    userId: state.userManager.userId
  };
};

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
