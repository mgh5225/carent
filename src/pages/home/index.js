import React from "react";

import { withoutAuth } from "components/Auth";

class HomePage extends React.Component {
  render() {
    return <div>Home Page</div>;
  }
}

export default withoutAuth(HomePage, "/dashboard");
