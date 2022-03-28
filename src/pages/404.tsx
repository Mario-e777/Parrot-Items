/* React & Gatsby stuff */
import React from "react";

/* Components */
import GlobalLayout from "../components/layouts/global";
import Seo from "../components/seo";

/* TODO: Improve this page */

const NotFoundPage = () => {
  return (
    <GlobalLayout>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </GlobalLayout>
  )
};

export default NotFoundPage;
