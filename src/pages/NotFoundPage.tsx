import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Mena Filfil - Not Found</title>
      </Helmet>
      404: This Page is Not Found. Please check if the URL is correct and come
      back again
      <br />
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
