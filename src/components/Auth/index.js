import { useEffect } from "react";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

export const withAuth = (Component, redirect_location = "/") => {
  return (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();
    useEffect(() => {
      if (!isAuthenticated) navigate(redirect_location, { replace: true });
    }, [isAuthenticated]);

    return <Component {...props} />;
  };
};

export const withoutAuth = (Component, redirect_location = "/") => {
  return (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();
    useEffect(() => {
      if (!!isAuthenticated) navigate(redirect_location, { replace: true });
    }, [isAuthenticated]);

    return <Component {...props} />;
  };
};
