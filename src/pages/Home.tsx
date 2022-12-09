import { Grid } from "@mantine/core";
import { useEffect } from "react";
import api from "../api";
import AddButton from "../components/AddButton";
import CompanyCard from "../components/CompanyCard";
import { Company } from "../types/model";
import { useDispatch, useSelector } from "react-redux";
import { newValue } from "../app/store";

const Home = () => {
  const dispatch = useDispatch();
  const { companies } = useSelector((state: any) => state.companies);
  useEffect(() => {
    api.get("").then((r) => {
      dispatch(newValue(r.data));
    });
  }, []);

  return !(companies.length > 0) ? (
    <div className="flex justify-center">
      <AddButton label="Add Organization" />
    </div>
  ) : (
    <div>
      <div className="flex justify-end">
        <AddButton label="Add Organization" />
      </div>
      <Grid justify="center" className="m-3 p-3">
        {companies.map((item: Company) => {
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
