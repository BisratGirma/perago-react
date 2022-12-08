import { MantineProvider } from "@mantine/core";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Tree from "./pages/Tree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:companyId",
    element: <Tree />,
  },
]);

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
