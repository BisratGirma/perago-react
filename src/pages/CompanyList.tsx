/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

import AddButton from "../components/AddButton";
import CompanyCard from "../components/CompanyCard";
import { Company } from "../types/model";

const CompanyList = ({
  companies,
}: {
  companies: Company[];
}) => {
  if (companies.length === 0) {
    return (
      <div
        css={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AddButton label="Add Organization" />
      </div>
    );
  }

  return (
    <div>
      <div
        css={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <AddButton label="Add Organization" />
      </div>
      <div>
        {companies.map((item) => {
          return (
            <CompanyCard name={item.name} bio={item.bio} />
          );
        })}
      </div>
    </div>
  );
};

export default CompanyList;
