import { MantineProvider } from "@mantine/core";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { useForm } from "@mantine/form";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Tree from "./pages/Tree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/:companyId",
    element: <Tree />,
  },
]);

function App() {
  // const form = useForm({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //   },
  // });
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
