import { MantineProvider } from "@mantine/core";
// import { useForm } from "@mantine/form";
import "./App.css";
import "./index.css";
import Tree from "./pages/Tree";
// import Home from "./pages/Home";

function App() {
  // const form = useForm({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //   },
  // });
  return (
    <MantineProvider>
      <Tree />
    </MantineProvider>
  );
}

export default App;
