/** @jsxImportSource @emotion/react */
import { MantineProvider } from "@mantine/core";
// import { useForm } from "@mantine/form";
import "./App.css";
import AddButton from "./components/AddButton";
import "./index.css";

function App() {
  // const form = useForm({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //   },
  // });
  return (
    <MantineProvider>
      <AddButton label="Add an Organization" />
    </MantineProvider>
  );
}

export default App;
