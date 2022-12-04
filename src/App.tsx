/** @jsxImportSource @emotion/react */
import { MantineProvider } from "@mantine/core";
// import { useForm } from "@mantine/form";
import "./App.css";
import "./index.css";
import CompanyList from "./pages/CompanyList";

function App() {
  // const form = useForm({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //   },
  // });
  return (
    <MantineProvider>
      <CompanyList
        companies={[
          {
            name: "Perago Systems",
            bio: "A decent software company",
          },
        ]}
      />
    </MantineProvider>
  );
}

export default App;
