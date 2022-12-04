/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

import { Company } from "../types/model";

const CompanyCard = ({ name, bio }: Company) => {
  return (
    <div
      css={{
        width: 172,
        height: 105,
        padding: 6,
        boxShadow: "0px 1px 6px",
        borderRadius: 8,
        cursor: "pointer",
      }}
    >
      <h6>{name}</h6>
      <p>{bio}</p>
    </div>
  );
};

export default CompanyCard;
