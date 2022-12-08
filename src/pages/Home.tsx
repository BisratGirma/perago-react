import React from "react";
import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import api from "../api";
import AddButton from "../components/AddButton";
import CompanyCard from "../components/CompanyCard";
import { Company } from "../types/model";

const Home = () => {
  const [companies, setCompanies] = useState<
    Array<Company>
  >();

  useEffect(() => {
    api.get("").then((r) => {
      setCompanies(r.data);
    });
  }, []);

  if (!companies || companies.length === 0) {
    return (
      <div className="flex justify-center">
        <AddButton label="Add Organization" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end">
        <AddButton label="Add Organization" />
      </div>
      <Grid justify="center" className="m-3 p-3">
        {companies.map((item) => {
          return (
            <Grid.Col
              span={4}
              className="flex justify-center"
              key={item.id}
            >
              <CompanyCard
                id={item.id}
                name={item.name}
                bio={item.bio}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
