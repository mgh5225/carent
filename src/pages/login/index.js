import React from "react";
import { connect } from "react-redux";

import { login } from "utils/users";
import { toast } from "react-toastify";

class LoginPage extends React.Component {
  onFormSubmitted = async (e) => {
    e.preventDefault();

    const { loginkon } = this.props;
    const { user, pass } = e.target.elements;

    try {
      const { message } = await loginkon(user.value, pass.value);
      toast.success(message);
    } catch (err) {
      const message = err.response
        ? err.response.data.message
        : "Something went wrong! Please try again later";
      toast.error(message);
    }
  };

  render() {
    const { isAuth } = this.props;

    return (
      <div>
        {!!isAuth ? "You are authenticated" : "you are not authenticated"}
        <form onSubmit={this.onFormSubmitted}>
          <input
            name="user"
            defaultValue="nami"
            placeholder="enter your username"
          />
          <input name="pass" placeholder="Enter your password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state?.auth?.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginkon: (username, password) => dispatch(login({ username, password })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
