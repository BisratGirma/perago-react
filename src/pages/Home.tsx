import { Grid } from "@mantine/core";
import AddButton from "../components/AddButton";
import CompanyCard from "../components/CompanyCard";
import { Company } from "../types/model";

const Home = ({ companies }: { companies: Company[] }) => {
  if (companies.length === 0) {
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
      <Grid justify="center">
        {companies.map((item) => {
          return (
            <Grid.Col span={4}>
              <CompanyCard
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
