import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>ErrorPage</h1>
      <Link to="*">ErrorPage</Link>;
    </div>
  );
}

export default ErrorPage;
