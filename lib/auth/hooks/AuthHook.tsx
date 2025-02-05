import React from "react";
import { AuthContext } from "../contexts/AuthContex.js";

const useAuthId = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthId must be used within an AuthProvider");
  }
  return context;
};

export { useAuthId };
