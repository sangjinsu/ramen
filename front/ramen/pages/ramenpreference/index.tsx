import React from "react";
import { withRouter } from "next/router";

function FirstPost({ router: { query } }) {
  const userInfo = JSON.parse(query.userInfo);
  console.log(userInfo);
  return (
    <>
      <h1>라면 취향 테스트</h1>
    </>
  );
}

export default withRouter(FirstPost);
