import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute({ children, ...rest }) {
  const {token} = useAuth()
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (children)  : <Redirect to="/login" />
      }
    />
  );
}