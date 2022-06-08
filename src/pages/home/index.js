import React from "react";
import { connect } from "react-redux";

import { auth } from "../../store";

import Plate from "components/Plate";

class HomePage extends React.Component {
  state = {
    username: "",
  };

  onButtonClicked = (e) => {
    const { chooseMe } = this.props;
    const { username } = this.state;

    chooseMe(username);
  };

  changeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    const { authentication } = this.props;
    const { username } = this.state;

    return (
      <div>
        <Plate />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseMe: (me) => dispatch(auth.setMe(me)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
