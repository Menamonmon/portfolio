import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      404: This Page is Not Found. Please check if the URL is correct and come
      back again
      <br />
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
