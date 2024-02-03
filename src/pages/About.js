import React from "react";
import { Link } from "react-router-dom";

function Items() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/about">About page</Link>;
    </div>
  );
}

export default Items;
